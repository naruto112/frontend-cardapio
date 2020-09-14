import React, { useState } from "react";
//import { useParams } from "react-router";
import { FiMapPin, FiShoppingCart } from "react-icons/fi";

import {
  Container,
  Header,
  HeaderContent,
  ItemCart,
  HeaderFooter,
  Scroll,
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
  //const { shop } = useParams<MatchProps>();

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
              <ButtonShop icon={FiShoppingCart} />
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
        <Scroll>
          <FilterCategory img={LancheImg} title="Lanches" />
          <FilterCategory img={BebidasImg} title="Bebidas" />
          <FilterCategory img={SobremesaImg} title="Sobremesa" />
          <FilterCategory img={BebidasImg} title="Bebidas" />
          <FilterCategory img={LancheImg} title="Lanches" />
        </Scroll>
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
