import React, { useState } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { FiMapPin, FiShoppingCart } from "react-icons/fi";

import {
  Container,
  Header,
  HeaderContent,
  ItemCart,
  HeaderFooter,
  FilterContainer,
  FoodContainer,
} from "./styles";

import ButtonShop from "../../../components/ButtonShop";
import FilterCategory from "../../../components/FilterCategory";
import Food from "../../../components/Food";

import LogoShop from "../../../assets/logoShop.png";
import LancheImg from "../../../assets/lanche.svg";
import BebidasImg from "../../../assets/bebidas.svg";
import SobremesaImg from "../../../assets/sobremesa.svg";
import Burger2 from "../../../assets/bg.jpg";

interface MatchProps {
  shop: string;
}

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Shop: React.FC = () => {
  const { shop } = useParams<MatchProps>();

  const foods: IFoodPlate[] = [
    {
      image: `${Burger2}`,
      name: "Veggie",
      price: "21.89",
      description:
        "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
      id: 2,
      available: true,
    },
    {
      id: 3,
      name: "A la Camarón",
      description:
        "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
      price: "25.90",
      available: true,
      image: `${Burger2}`,
    },
    {
      image: `${Burger2}`,
      name: "Moda Otario",
      price: "13.90",
      description: "Moda otario é aquele que opera e acha que vai resolve",
      available: true,
      id: 4,
    },
    {
      image: `${Burger2}`,
      name: "Moda Otario",
      price: "13.90",
      description: "Moda otario é aquele que opera e acha que vai resolve",
      available: true,
      id: 5,
    },
    {
      image: `${Burger2}`,
      name: "Moda Otario",
      price: "13.90",
      description: "Moda otario é aquele que opera e acha que vai resolve",
      available: true,
      id: 6,
    },
    {
      image: `${Burger2}`,
      name: "Moda Otario",
      price: "13.90",
      description: "Moda otario é aquele que opera e acha que vai resolve",
      available: true,
      id: 7,
    },
  ];

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
              <Link
                to={{
                  pathname: `${shop}/order`,
                }}
              >
                <ButtonShop icon={FiShoppingCart} title="Ver pedido" />
              </Link>
              <ItemCart>
                <span>8</span>
              </ItemCart>
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
      <FoodContainer>
        {foods.map((food, index) => (
          <Food key={index} food={food} />
        ))}
      </FoodContainer>
    </>
  );
};

export default Shop;
