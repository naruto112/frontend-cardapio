import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useParams } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

import { Container, FilterContainer, FoodContainer, Title } from "./styles";
import ComidaSvg from "../../../assets/comida.svg";

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
  price: number;
  category: ICategory;
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
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
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

  const handleSelectItem = (id: number, name: string) => {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([id]);
    }

    // handleFilterProduct(name);
  };

  // const handleFilterProduct = (name: string) => {
  //   const product = menu.filter((item) =>
  //     item.products.filter(
  //       (product) => product.category.name === "Refrigerantes"
  //     )
  //   );
  //   console.log(product);
  // };

  return (
    <>
      <Purchase isOpen={modalOpen} setIsOpen={toggleModal} />
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
          naturalSlideWidth={2}
          naturalSlideHeight={2}
          totalSlides={2}
        >
          <Slider className="filter-category">
            {categories.map((category, index) => (
              <FilterCategory
                className={selectedItems.includes(index) ? "selected" : ""}
                key={category.id}
                img={category.url ? category.url : ComidaSvg}
                title={category.name}
                style={{ marginRight: 30 }}
                onClick={() => handleSelectItem(index, category.name)}
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
