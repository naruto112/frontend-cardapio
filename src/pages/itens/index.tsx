import React, { useState, useCallback, useEffect } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { useHistory, useParams } from "react-router-dom";
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
import ModalAddAditional from "../../components/ModalAddAditional";
import FilterCategory from "../../components/FilterCategory";

import LancheImg from "../../assets/lanche.svg";
import { api } from "../../services/api";

interface ICardProduct {
  id: number;
  name: string;
  stock: string;
  description: string;
  price: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IParams {
  id: string;
}

const Itens: React.FC = () => {
  const [list, setLists] = useState<ICardProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>();
  const [modalOpenCategory, setModalOpenCategory] = useState(false);
  const [modalOpenAditional, setModalOpenAditional] = useState(false);
  const history = useHistory();
  const { id } = useParams<IParams>();

  useEffect(() => {
    api.get(`menu/${id}`).then((response) => {
      setLists(response.data[0].products);
    });

    api.get("categories").then((response) => {
      setCategories(response.data);
    });
  }, [id]);

  const location = useCallback(
    (href: string) => {
      history.push(href);
    },
    [history]
  );

  const toggleModalCategory = (): void => {
    setModalOpenCategory(!modalOpenCategory);
  };

  const toggleModalAditional = (): void => {
    setModalOpenAditional(!modalOpenAditional);
  };

  return (
    <Container>
      <Header route="dashboard" />
      <ModalAddCategory
        isOpen={modalOpenCategory}
        setIsOpen={toggleModalCategory}
        handleAddCategory={() => {}}
      />
      <ModalAddAditional
        isOpen={modalOpenAditional}
        setIsOpen={toggleModalAditional}
        handleAddAditional={() => {}}
      />
      <ContentButtonHeader>
        <div>
          <Button onClick={() => setModalOpenCategory(true)}>
            <FiPlus size={20} />
            <span>Categoria</span>
          </Button>
          <Button onClick={() => setModalOpenAditional(true)}>
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
            {categories?.map((category) => (
              <FilterCategory
                key={category.id}
                img={LancheImg}
                title={category.name}
                style={{ marginRight: 30 }}
              />
            ))}
          </Slider>
        </CarouselProvider>
      </FilterContainer>
      <Section>
        <Category>
          <Product>
            {list.map((product, index) => (
              <CardProduct
                index={index}
                id={product.id}
                key={product.id}
                name={product.name}
                quantity={product.stock}
                description={product.description}
                price={product.price}
              />
            ))}
          </Product>
        </Category>
      </Section>
    </Container>
  );
};

export default Itens;
