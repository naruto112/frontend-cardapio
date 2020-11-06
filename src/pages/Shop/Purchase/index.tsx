import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useSelector } from "react-redux";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import {
  Content,
  OrderData,
  Orderyou,
  SelectDelivery,
  OrderFooter,
} from "./styles";

import { apiCep } from "../../../services/api";

import Entrega from "../../../assets/entrega.svg";
import addCarrinho from "../../../assets/addCarrinho.svg";
import Garfo from "../../../assets/garfo.svg";

import ButtonShop from "../../../components/ButtonShop";
import { FiCheckCircle } from "react-icons/fi";
import InputRow from "../../../components/InputRow";
import FilterCategory from "../../../components/FilterCategory";
import ModalOrderShop from "../../../components/ModalOrderShop";

import { IState } from "../../../store";
import { ICartItem } from "../../../store/modules/cart/types";
import { IShopState } from "../../../store/modules/profile/types";
import formatValue from "../../../utils/formatValue";
import Select from "../../../components/Select";
import InputMask from "../../../components/InputMask";

interface IOrder {
  cart: ICartItem[];
  shipping: string;
  client: {
    name: string;
    document: string;
    codepostal: string;
    uf: string;
    city: string;
    neighborhood: string;
    address: string;
    number: string;
    complement: string;
    pay: string;
    exchange?: number;
  };
}

interface ICreateAddtionalData {
  id?: string;
  name?: string;
  quantity: number;
  aditionals?: {
    name: string;
    quantity: number;
    price: number;
  }[];
  observation?: string;
  price?: number;
  numberProduct?: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Purchase: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const FormRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [cep, setCep] = useState("");
  const [priceTotal, setPriceTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [shipping, setShipping] = useState(0);
  const [exchangePay, setExchangePay] = useState(false);
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const shopProfile = useSelector<IState, IShopState>((state) => state.shop);

  useEffect(() => {
    const res = cart.reduce((acc, current) => {
      acc = Number(current.product.price) + acc;
      return acc;
    }, 0);

    const location = localStorage.getItem("@Cardapio:location");

    setPriceTotal(res);
  }, [cart]);

  const handleSelectItem = useCallback(
    (id: number) => {
      const alreadySelected = selectedItems.findIndex((item) => item === id);

      if (id === 1) {
        setShipping(9.89);
      } else {
        setShipping(0);
      }

      if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => item !== id);
        setSelectedItems(filteredItems);
        setShipping(0);
      } else {
        setSelectedItems([id]);
      }
    },
    [selectedItems]
  );

  const handleCep = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace("_", "");
      if (value.length >= 9) {
        const cepValue = value.replace("-", "");
        const response = await apiCep.get(`${cepValue}/json`);

        const { bairro, localidade, logradouro, uf, cep } = response.data;
        if (!bairro) {
          throw new Error("");
        }
        FormRef.current?.setFieldValue("neighborhood", bairro);
        FormRef.current?.setFieldValue("city", localidade);
        FormRef.current?.setFieldValue("address", logradouro);
        FormRef.current?.setFieldValue("uf", uf);
        setCep(cep);
      }
    },
    []
  );

  const handleClosedOrder = () => {
    let shipping = "";
    switch (Number(selectedItems)) {
      case 1:
        shipping = "Delivery";
        setShipping(9.89);
        break;
      case 2:
        shipping = "Retirar";
        break;
      case 3:
        shipping = "Consumir no Local";
        break;
    }

    const data = {
      cart,
      shipping,
      client: {
        name: FormRef.current?.getFieldValue("name"),
        document: FormRef.current?.getFieldValue("document"),
        codepostal: cep,
        uf: FormRef.current?.getFieldValue("uf"),
        city: FormRef.current?.getFieldValue("city"),
        neighborhood: FormRef.current?.getFieldValue("neighborhood"),
        address: FormRef.current?.getFieldValue("address"),
        number: FormRef.current?.getFieldValue("number"),
        complement: FormRef.current?.getFieldValue("complement"),
        pay: FormRef.current?.getFieldValue("pay"),
        exchange: FormRef.current?.getFieldValue("exchange"),
      },
    };
    toggleCupomFiscal(data);
  };

  const handleChangedPay = () => {
    const formPgto = FormRef.current?.getFieldValue("pay");
    if (formPgto === "Dinheiro") {
      setExchangePay(true);
    }
  };

  const toggleCupomFiscal = useCallback(
    (data: IOrder) => {
      const dateNow = new Date();
      const formateDate = format(
        dateNow,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
        { locale: ptBr }
      );

      let cupomFiscal = "";
      cupomFiscal += `*CardapioDigital - Novo pedido* %0A`;
      cupomFiscal += `----------------------------------------------- %0A`;
      // eslint-disable-next-line
      cart.map((carted) => {
        cupomFiscal += `*${carted.product.quantity}x ${
          carted.product.name
        }* ${carted.product.aditionals.map(
          (aditional) => `+ ${aditional.name}`
        )} : *${formatValue(carted.product.price)}*%0A`;
        cupomFiscal += `- Obs: ${
          carted.product.observation ? carted.product.observation : "nenhuma"
        } %0A`;
        cupomFiscal += `%0A`;
      });
      if (shipping) {
        cupomFiscal += `*Total mais o Frete: ${formatValue(
          priceTotal + shipping
        )}* %0A`;
      } else {
        cupomFiscal += `*Total: ${formatValue(priceTotal)}* %0A`;
      }
      cupomFiscal += `----------------------------------------------- %0A`;
      cupomFiscal += `*Delivery, Retirar ou Consumir?* %0A`;
      cupomFiscal += `${data.shipping} %0A`;
      if (data.shipping === "Delivery") {
        if (data.client.complement) {
          cupomFiscal += `*End:* ${data.client.address}, ${data.client.number} (${data.client.complement}) - ${data.client.neighborhood} - ${data.client.city} - ${data.client.uf} - CEP: ${data.client.codepostal} %0A`;
        } else {
          cupomFiscal += `*End:* ${data.client.address}, ${data.client.number} - ${data.client.neighborhood} - ${data.client.city} - ${data.client.uf} - CEP: ${data.client.codepostal} %0A`;
        }
        cupomFiscal += `----------------------------------------------- %0A`;
      }
      cupomFiscal += `*Como você vai pagar?* %0A`;
      cupomFiscal += `${data.client.pay} %0A`;
      if (data.client.exchange) {
        cupomFiscal += `*Troco para quanto?* %0A`;
        cupomFiscal += `R$ ${data.client.exchange} %0A`;
      }
      cupomFiscal += `*Nome* %0A`;
      cupomFiscal += `${data.client.name} %0A`;
      if (data.client.document) {
        cupomFiscal += `*CPF/CNPJ* %0A`;
        cupomFiscal += `${data.client.document} %0A`;
      }
      cupomFiscal += `_Pedido recebido pelo Cardápio Digital: ${formateDate}_ %0A`;

      window.encodeURIComponent(cupomFiscal);
      window.open(
        "https://web.whatsapp.com/send?phone=" +
          `55${shopProfile.items[0].phone}` +
          "&text=" +
          cupomFiscal,
        "_blank"
      );

      history.go(0);
    },
    [cart, priceTotal, shipping, history, shopProfile.items]
  );

  return (
    <ModalOrderShop isOpen={isOpen} setIsOpen={setIsOpen}>
      <Content>
        <OrderData>
          <h3>Preencha seu dados</h3>
          <Form ref={FormRef} onSubmit={() => {}}>
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0, marginRight: 0 }}
              name="name"
              placeholder="Digite seu nome"
            />
            <InputMask
              mask="999.999.999-99"
              size={20}
              containerStyle={{ width: 400, marginLeft: 0, marginRight: 0 }}
              name="document"
              placeholder="CPF na nota"
            />
            <div>
              <InputRow
                mask="99999-999"
                size={20}
                containerStyle={{ width: 220, marginLeft: 0, marginRight: 0 }}
                name="codepostal"
                placeholder="CEP"
                onChange={(e) => handleCep(e)}
              />
              <InputRow
                size={20}
                containerStyle={{ width: 160, marginLeft: 0, marginRight: 0 }}
                name="uf"
                placeholder="UF"
              />
            </div>
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 200, marginLeft: 0, marginRight: 0 }}
                name="city"
                placeholder="Cidade"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 180, marginLeft: 0, marginRight: 0 }}
                name="neighborhood"
                placeholder="Bairro"
              />
            </div>
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0, marginRight: 0 }}
              name="address"
              placeholder="Endereço"
            />
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 100, marginLeft: 0, marginRight: 0 }}
                name="number"
                placeholder="N.º"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 280, marginLeft: 0, marginRight: 0 }}
                name="complement"
                placeholder="Complemento"
              />
            </div>
            <Select
              name="pay"
              placeholder="Qual a forma de pagamento?"
              containerStyle={{ width: 400, marginLeft: 0, height: 52 }}
              handleChanged={handleChangedPay}
              value={[
                {
                  id: "Débito",
                  name: "Débito",
                },
                {
                  id: "Dinheiro",
                  name: "Dinheiro",
                },
              ]}
            />
            {exchangePay && (
              <InputRow
                size={20}
                containerStyle={{ width: 400, marginLeft: 0, marginRight: 0 }}
                name="exchange"
                placeholder="Troco? qual valor..."
              />
            )}
            <SelectDelivery>
              <FilterCategory
                className={selectedItems.includes(1) ? "selected" : ""}
                img={Entrega}
                style={{ width: 100, color: "#6C6C80" }}
                title="Delivery"
                onClick={() => handleSelectItem(1)}
              />
              <FilterCategory
                className={selectedItems.includes(2) ? "selected" : ""}
                img={addCarrinho}
                title="Retirar"
                style={{ width: 100, color: "#6C6C80" }}
                onClick={() => handleSelectItem(2)}
              />
              <FilterCategory
                className={selectedItems.includes(3) ? "selected" : ""}
                img={Garfo}
                title="Consumir"
                style={{ width: 100, color: "#6C6C80" }}
                onClick={() => handleSelectItem(3)}
              />
            </SelectDelivery>
            <div className="btn-order">
              <ButtonShop
                icon={FiCheckCircle}
                title="Fechar o pedido"
                click={handleClosedOrder}
              />
            </div>
          </Form>
        </OrderData>
        <Orderyou>
          <div className="content">
            <h2>Seu pedido</h2>
            <hr />
            <main>
              {cart.map((carted) => (
                <Fragment key={carted.product.id}>
                  <div className="line-order">
                    <span>
                      {carted.product.quantity}x {carted.product.name}{" "}
                      {carted.product.aditionals.length ? `+` : null}{" "}
                      {carted.product.aditionals.map((aditional) => (
                        <div key={aditional.id}>{aditional.name}</div>
                      ))}
                    </span>
                    <strong>{formatValue(carted.product.price)}</strong>
                  </div>
                </Fragment>
              ))}
            </main>
            <hr />
            <section>
              <div className="line-order">
                <span>Subtotal</span>
                <strong>{formatValue(priceTotal)}</strong>
              </div>
              <div className="line-order">
                <span>Taxa de entrega</span>
                <strong>
                  {shipping ? formatValue(shipping) : `Não Possui`}
                </strong>
              </div>
            </section>
          </div>
          <OrderFooter>
            <div className="total-order">
              <span>Total</span>
              <strong>{formatValue(priceTotal + shipping)}</strong>
            </div>
          </OrderFooter>
        </Orderyou>
      </Content>
    </ModalOrderShop>
  );
};

export default Purchase;
