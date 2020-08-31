import React from "react";

import { FiPlus } from "react-icons/fi";

import {
  Container,
  ContentButtonHeader,
  TitlePage,
  SearchContainer,
  FilterContainer,
  FilterTitle,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";

import LancheImg from "../../assets/lanche.svg";
import BebidasImg from "../../assets/bebidas.svg";
import SobremesaImg from "../../assets/sobremesa.svg";

const Dashboard: React.FC = () => {
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
    </Container>
  );
};

export default Dashboard;
