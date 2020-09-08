import React from "react";
import { FiSave } from "react-icons/fi";

import {
  Container,
  TitlePage,
  ContentProduct,
  ProductDetail,
  ProductFooter,
} from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Detail: React.FC = () => {
  return (
    <Container>
      <Header route="detail" />
      <TitlePage>
        <h1>Detalhes</h1>
      </TitlePage>
      <ContentProduct>
        <ProductDetail></ProductDetail>
        <ProductFooter>
          <div>
            <Button>
              <FiSave size={20} />
              <span>Salvar mudanças</span>
            </Button>
          </div>
        </ProductFooter>
      </ContentProduct>
    </Container>
  );
};

export default Detail;
