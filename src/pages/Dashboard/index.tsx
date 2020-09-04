import React, { useState } from "react";

import { FiPlus } from "react-icons/fi";

import {
  Container,
  ContentButtonHeader,
  TitlePage,
  SearchContainer,
  FilterContainer,
  FilterTitle,
  Section,
  Category,
  CardProduct,
  ContentProduct,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";

import LancheImg from "../../assets/lanche.svg";
import BebidasImg from "../../assets/bebidas.svg";
import SobremesaImg from "../../assets/sobremesa.svg";
import Burger from "../../assets/bg.png";
import Burger2 from "../../assets/bg.jpg";

const Dashboard: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  async function toggleAvailable(): Promise<void> {
    setIsAvailable(!isAvailable);
  }

  return (
    <Container>
      <Header route="dashboard" />
      <ContentButtonHeader>
        <div>
          <Button>
            <FiPlus />
            <span>Criar Categoria</span>
          </Button>
          <Button>
            <FiPlus />
            <span>Adicionar Produto</span>
          </Button>
        </div>
      </ContentButtonHeader>
      <TitlePage>
        <h1>Lista de produtos</h1>
      </TitlePage>
      <SearchContainer>
        <SearchInput placeholder="Qual produto deseja pesquisar?" />
      </SearchContainer>
      <FilterTitle>
        <strong>Filtros</strong>
      </FilterTitle>
      <FilterContainer>
        <div>
          <button>
            <img src={LancheImg} alt="Lanches" />
            <span>Lanches</span>
          </button>
          <button>
            <img src={BebidasImg} alt="Bebidas" />
            <span>Bebidas</span>
          </button>
          <button>
            <img src={SobremesaImg} alt="Sobremesas" />
            <span>Sobremesas</span>
          </button>
        </div>
      </FilterContainer>
      <Section>
        <Category>
          <h1>Lanches</h1>
          <CardProduct>
            <header>
              <img src={Burger} alt="Burger" />
            </header>
            <ContentProduct>
              <div className="top-card">
                <h2>Mister Buerger</h2>
                <strong>16 itens</strong>
              </div>
              <div className="middle-card">
                <article>
                  Carne de 150gm com cebola caramelizada e um toque de pimenta
                </article>
              </div>
              <div className="bottom-card">
                <span>R$ 27,90</span>
                <div className="availability-container">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isAvailable}
                      onChange={toggleAvailable}
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>
            </ContentProduct>
          </CardProduct>
        </Category>
      </Section>
    </Container>
  );
};

export default Dashboard;
