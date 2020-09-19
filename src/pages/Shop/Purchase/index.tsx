import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import {
  Container,
  Header,
  HeaderContent,
  HeaderFooter,
  Content,
  OrderData,
  Orderyou,
  SelecteDelivery,
  OrderFooter,
} from "./styles";

import LogoShop from "../../../assets/logoShop.png";
import Entrega from "../../../assets/entrega.svg";
import addCarrinho from "../../../assets/addCarrinho.svg";
import Garfo from "../../../assets/garfo.svg";

import ButtonShop from "../../../components/ButtonShop";
import { FiCheckCircle, FiHome, FiMapPin } from "react-icons/fi";
import InputRow from "../../../components/InputRow";
import FilterCategory from "../../../components/FilterCategory";

interface MatchProps {
  shop: string;
}

const Purchase: React.FC = () => {
  const history = useHistory();
  const FormRef = useRef<FormHandles>(null);

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <div>
              <img src={LogoShop} alt="Logo Shop" />
              <h1>I Love Burger</h1>
            </div>
            <div>
              <ButtonShop icon={FiHome} title="Voltar" click={history.goBack} />
            </div>
          </HeaderContent>
          <HeaderFooter>
            <div>
              <span className="delivery-top">ENTREGAR EM</span>
              <span>
                <FiMapPin size={20} /> Av. Carlos klein, 314
              </span>
            </div>
          </HeaderFooter>
        </Header>
      </Container>
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
    </>
  );
};

export default Purchase;
