import React, { useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import {
  Content,
  OrderData,
  Orderyou,
  SelecteDelivery,
  OrderFooter,
} from "./styles";

import Entrega from "../../../assets/entrega.svg";
import addCarrinho from "../../../assets/addCarrinho.svg";
import Garfo from "../../../assets/garfo.svg";

import ButtonShop from "../../../components/ButtonShop";
import { FiCheckCircle } from "react-icons/fi";
import InputRow from "../../../components/InputRow";
import FilterCategory from "../../../components/FilterCategory";
import ModalOrderShop from "../../../components/ModalOrderShop";
import { useSelector } from "react-redux";
import { IState } from "../../../store";
import { ICartItem } from "../../../store/modules/cart/types";

interface ICreateAddtionalData {
  id?: string;
  name?: string;
  aditionals?: {
    name: string;
    quantity: number;
    price: number;
  };
  observation?: string;
  price?: number;
  numberProduct?: number;
}

interface IModalProps {
  id: string;
  isOpen: boolean;
  setIsOpen: () => void;
  handleOrderPurchase: (addttional: ICreateAddtionalData) => void;
}

const Purchase: React.FC<IModalProps> = ({
  id,
  isOpen,
  setIsOpen,
  handleOrderPurchase,
}) => {
  const FormRef = useRef<FormHandles>(null);

  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  console.log(cart);

  return (
    <ModalOrderShop isOpen={isOpen} setIsOpen={setIsOpen}>
      <Content>
        <OrderData>
          <h3>Preencha seu dados</h3>
          <Form ref={FormRef} onSubmit={() => {}}>
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0 }}
              name="name"
              placeholder="Digite seu nome"
            />
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0 }}
              name="name"
              placeholder="CPF/CNPJ na nota"
            />
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 220, marginLeft: 0 }}
                name="name"
                placeholder="CEP"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 150, marginLeft: 0 }}
                name="name"
                placeholder="UF"
              />
            </div>
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 200, marginLeft: 0 }}
                name="name"
                placeholder="Cidade"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 180, marginLeft: 0 }}
                name="name"
                placeholder="Bairro"
              />
            </div>
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0 }}
              name="name"
              placeholder="Endereço"
            />
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 100, marginLeft: 0 }}
                name="name"
                placeholder="N.º"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 280, marginLeft: 0 }}
                name="name"
                placeholder="Complemento"
              />
            </div>
            <InputRow
              size={20}
              containerStyle={{ width: 400, marginLeft: 0 }}
              name="name"
              placeholder="Digite seu WhatsApp"
            />
            <SelecteDelivery>
              <FilterCategory
                className="change-selecte-delivery"
                img={Entrega}
                style={{ width: 100, color: "#6C6C80" }}
                title="Delivery"
              />
              <FilterCategory
                className="change-selecte-delivery"
                img={addCarrinho}
                title="Retirar"
                style={{ width: 100, color: "#6C6C80" }}
              />
              <FilterCategory
                className="change-selecte-delivery"
                img={Garfo}
                title="Consumir"
                style={{ width: 100, color: "#6C6C80" }}
              />
            </SelecteDelivery>
            <div className="btn-order">
              <ButtonShop icon={FiCheckCircle} title="Fechar o pedido" />
            </div>
          </Form>
        </OrderData>
        <Orderyou>
          <div className="content">
            <h2>Seu pedido</h2>
            <hr />
            <main>
              <div className="line-order">
                <span>1x 5 bib’sfihas clássicas + Coca-Cola Lata</span>
                <strong>R$ 9,80</strong>
              </div>
              <div className="line-order">
                <span>1x 5 bib’sfihas clássicas + Coca-Cola Lata</span>
                <strong>R$ 9,80</strong>
              </div>
              <div className="line-order">
                <span>1x 5 bib’sfihas clássicas + Coca-Cola Lata</span>
                <strong>R$ 9,80</strong>
              </div>
            </main>
            <hr />
            <section>
              <div className="line-order">
                <span>Subtotal</span>
                <strong>R$ 19,80</strong>
              </div>
              <div className="line-order">
                <span>Taxa de entrega</span>
                <strong>R$ 8,00</strong>
              </div>
            </section>
          </div>
          <OrderFooter>
            <div className="total-order">
              <span>Total</span>
              <strong>R$ 27,80</strong>
            </div>
          </OrderFooter>
        </Orderyou>
      </Content>
    </ModalOrderShop>
  );
};

export default Purchase;
