import React, { useState, useCallback, useEffect } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import * as Yup from "yup";
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
import { useToast } from "../../components/Toast";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import CardProduct from "../../components/CardProduct";
import ModalAddCategory from "../../components/ModalAddCategory";
import ModalAddAditional from "../../components/ModalAddAditional";
import FilterCategory from "../../components/FilterCategory";

import Interrogacao from "../../assets/interrogacao.svg";
import { api } from "../../services/api";

interface IAttachment {
  url: string;
}

interface ICardProduct {
  id: number;
  name: string;
  stock: string;
  description: string;
  visible: number;
  price: string;
  attachment: IAttachment[];
}

interface ICategory {
  id: string;
  name: string;
  attachment: IAttachment[];
}

interface IAditional {
  id: string;
  name: string;
  quantity: number;
  price: number;
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
  const { addToast } = useToast();
  const { id } = useParams<IParams>();

  useEffect(() => {
    api.get(`products/${id}`).then((response) => {
      setLists(response.data);
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

  const handleAddAditional = useCallback(
    async (aditional: IAditional) => {
      try {
        addToast({
          type: "success",
          title: "Adicionais Feito!",
          description: "Seus adicionais foram incluidos com sucesso!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          return;
        }

        addToast({
          type: "error",
          title: "Erro ao adicionar",
          description:
            "Ocorreu um erro ao incluir os adicionais, tente novamente",
        });
      }
    },
    [addToast]
  );

  const handleAddCategory = useCallback(
    async (category: ICategory) => {
      try {
        categories?.push(category);

        addToast({
          type: "success",
          title: "Categoria adicionada!",
          description: "Categoria criada com sucesso!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          return;
        }

        addToast({
          type: "error",
          title: "Erro ao adicionar",
          description:
            "Ocorreu um erro ao adicionar a categoria, tente novamente",
        });
      }
    },
    [addToast, categories]
  );

  console.log(categories);

  return (
    <Container>
      <Header route="dashboard" />
      <ModalAddCategory
        isOpen={modalOpenCategory}
        setIsOpen={toggleModalCategory}
        handleAddCategory={handleAddCategory}
      />
      <ModalAddAditional
        isOpen={modalOpenAditional}
        setIsOpen={toggleModalAditional}
        handleAddAditional={handleAddAditional}
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
          {categories?.length !== 0 ? (
            <Button onClick={() => location(`/product/new/${id}`)}>
              <FiPlus size={20} />
              <span>Produto</span>
            </Button>
          ) : null}
        </div>
      </ContentButtonHeader>
      <TitlePage>
        <h1>Lista de produtos</h1>
      </TitlePage>
      <SearchContainer>
        <SearchInput placeholder="Qual produto deseja pesquisar?" />
      </SearchContainer>
      <FilterTitle>
        <strong>Categorias</strong>
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
                img={
                  category.attachment[0]
                    ? category.attachment[0].url
                    : Interrogacao
                }
                // img={LancheImg}
                title={category.name}
                style={{
                  marginRight: 30,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
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
                visible={product.visible === 1 ? true : false}
                id={product.id}
                key={product.id}
                name={product.name}
                url={
                  product.attachment.length ? product.attachment[0].url : false
                }
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
