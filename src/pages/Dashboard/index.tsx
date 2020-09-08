import React, { useState, useCallback } from "react";
import update from "immutability-helper";
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
  Product,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import CardProduct from "../../components/CardProduct";

import LancheImg from "../../assets/lanche.svg";
import BebidasImg from "../../assets/bebidas.svg";
import SobremesaImg from "../../assets/sobremesa.svg";

interface ICardProduct {
  id: number;
  name: string;
  quantity: string;
  description: string;
  price: string;
}

const Dashboard: React.FC = () => {
  const CardaProduct: ICardProduct[] = [
    {
      id: 1,
      name: "Mister 1",
      quantity: "12 itens",
      description: "Ovo de 150gm com cebola caramelizada e um toque de pimenta",
      price: "28.90",
    },
    {
      id: 2,
      name: "Mister 2",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 3,
      name: "Mister 3",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 4,
      name: "Mister 4",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 5,
      name: "Mister 5",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 6,
      name: "Mister 6",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 7,
      name: "Mister 7",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
  ];

  const [list, setLists] = useState(CardaProduct);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = list[dragIndex];
      setLists(
        update(list, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [list]
  );

  return (
    <Container>
      <Header route="dashboard" />
      <ContentButtonHeader>
        <div>
          <Button>
            <FiPlus size={20} />
            <span>Criar Categoria</span>
          </Button>
          <Button>
            <FiPlus size={20} />
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
          <Product>
            {list.map((product, index) => (
              <CardProduct
                index={index}
                id={product.id}
                key={product.id}
                name={product.name}
                quantity={product.quantity}
                description={product.description}
                price={product.price}
                moveCard={moveCard}
              />
            ))}
          </Product>
        </Category>
      </Section>
    </Container>
  );
};

export default Dashboard;
