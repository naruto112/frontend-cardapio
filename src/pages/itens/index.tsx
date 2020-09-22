import React, { useState, useCallback } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { useHistory } from "react-router-dom";
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
import ModalAddCategory from "../../components/ModalAddCategory";
import FilterCategory from "../../components/FilterCategory";

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

const Itens: React.FC = () => {
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
    {
      id: 8,
      name: "Mister 8",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 9,
      name: "Mister 9",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 10,
      name: "Mister 10",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
    {
      id: 11,
      name: "Mister 11",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
      price: "17.80",
    },
  ];

  const [list, setLists] = useState(CardaProduct);
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

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

  const location = useCallback(
    (href: string) => {
      history.push(href);
    },
    [history]
  );

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <Header route="dashboard" />
      <ModalAddCategory
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddProduct={() => {}}
      />
      <ContentButtonHeader>
        <div>
          <Button onClick={() => setModalOpen(true)}>
            <FiPlus size={20} />
            <span>Categoria</span>
          </Button>
          <Button onClick={() => setModalOpen(true)}>
            <FiPlus size={20} />
            <span>Adicionais</span>
          </Button>
          <Button onClick={() => location("/product/new")}>
            <FiPlus size={20} />
            <span>Produto</span>
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
        <CarouselProvider
          className="carosel"
          naturalSlideWidth={1}
          naturalSlideHeight={2}
          totalSlides={4}
        >
          <Slider className="filter-category">
            <FilterCategory
              img={LancheImg}
              title="Lanches"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={BebidasImg}
              title="Bebidas"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={SobremesaImg}
              title="Sobremesa"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={BebidasImg}
              title="Bebidas"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={BebidasImg}
              title="Bebidas"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={SobremesaImg}
              title="Sobremesa"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={BebidasImg}
              title="Bebidas"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={SobremesaImg}
              title="Sobremesa"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={SobremesaImg}
              title="Sobremesa"
              style={{ marginRight: 30 }}
            />
            <FilterCategory
              img={BebidasImg}
              title="Bebidas"
              style={{ marginRight: 30 }}
            />
          </Slider>
        </CarouselProvider>
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

export default Itens;
