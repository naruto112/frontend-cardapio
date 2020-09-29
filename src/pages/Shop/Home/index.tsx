import React from "react";
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
  Title,
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

interface IMenu {
  id: number;
  name: string;
  product: IFoodPlate[];
}

const Shop: React.FC = () => {
  const { shop } = useParams<MatchProps>();

  const menu: IMenu[] = [
    {
      id: 1,
      name: "Cardapio mês",
      product: [
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
          id: 1,
          name: "A la Camarón",
          description:
            "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
          price: "25.90",
          available: true,
          image: `${Burger2}`,
        },
      ],
    },
    {
      id: 2,
      name: "Cardapio de Jantar",
      product: [
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
          id: 1,
          name: "A la Camarón",
          description:
            "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
          price: "25.90",
          available: true,
          image: `${Burger2}`,
        },
      ],
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

      {menu.map((card, index) => (
        <FoodContainer key={index}>
          <Title>
            <h2>{card.name}</h2>
          </Title>
          <div className="food-item">
            {card.product.map((food) => (
              <Food key={food.id} food={food} />
            ))}
          </div>
        </FoodContainer>
      ))}
    </>
  );
};

export default Shop;
