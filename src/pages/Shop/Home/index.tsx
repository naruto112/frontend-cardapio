import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useParams } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

import { Container, FilterContainer, FoodContainer, Title } from "./styles";

import FilterCategory from "../../../components/FilterCategory";
import Food from "../../../components/Food";
import HeaderShop from "../../../components/HeaderShop/";

import { api } from "../../../services/api";
import Purchase from "../Purchase";

interface MatchProps {
  shop: string;
}

interface ICategory {
  id: string;
  name: string;
  url: string;
}

interface IAttachment {
  id: string;
  url: string;
}

interface IFoodPlate {
  id: string;
  name: string;
  price: string;
  description: string;
  visible: boolean;
  attachment: IAttachment[];
}

interface IMenu {
  id: string;
  name: string;
  products: IFoodPlate[];
}

const Shop: React.FC = () => {
  const { shop } = useParams<MatchProps>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.get(`shop/categories/${shop}`).then((response) => {
      setCategories(response.data);
    });

    api.get(`shop/menu/${shop}`).then((response) => {
      setMenu(response.data);
    });
  }, [shop]);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Purchase
        id={"1"}
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleOrderPurchase={() => {}}
      />
      <Container>
        <HeaderShop
          icon={FiShoppingCart}
          title="Ver pedido"
          onClick={() => setModalOpen(true)}
        />
      </Container>
      <FilterContainer>
        <CarouselProvider
          className="carosel"
          naturalSlideWidth={1}
          naturalSlideHeight={2}
          totalSlides={4}
        >
          <Slider className="filter-category">
            {categories.map((category) => (
              <FilterCategory
                key={category.id}
                img={category.url}
                title={category.name}
                style={{ marginRight: 30 }}
              />
            ))}
          </Slider>
        </CarouselProvider>
      </FilterContainer>

      {menu.map((card, index) => (
        <FoodContainer key={index}>
          <Title>
            <h2>{card.name}</h2>
          </Title>
          <div className="food-item">
            {card.products.map((food) => (
              <Food key={food.id} food={food} />
            ))}
          </div>
        </FoodContainer>
      ))}
    </>
  );
};

export default Shop;
