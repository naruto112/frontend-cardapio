import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./styles";

import ModalShopAddtional from "../ModalShopAdditional";

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IProps {
  food: IFoodPlate;
}

const Food: React.FC<IProps> = ({ food }: IProps) => {
  const [isAvailable] = useState(food.available);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container available={isAvailable}>
      <ModalShopAddtional
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddAddtional={() => {}}
      />
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="availability-container">
          <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
            />
            <span className="slider" />
          </label>
        </div>

        <div className="btn-cart">
          <button onClick={() => setModalOpen(true)}>
            <FiShoppingCart size={20} />
            <span>Comprar</span>
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Food;
