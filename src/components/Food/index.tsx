import React, { useCallback, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import ModalShopAddtional from "../ModalShopAdditional";

import { addProductToCart } from "../../store/modules/cart/actions";
import formatValue from "../../utils/formatValue";

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

interface IProps {
  food: IFoodPlate;
}

const Food: React.FC<IProps> = ({ food }: IProps) => {
  const [isAvailable] = useState(food.visible);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  const toggleIncrement = useCallback(
    (data) => {
      setModalOpen(!modalOpen);
      dispatch(addProductToCart(data));
    },
    [dispatch, modalOpen]
  );

  return (
    <Container available={isAvailable}>
      <ModalShopAddtional
        id={food.id}
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddAddtional={toggleIncrement}
      />
      <header>
        <img src={food.attachment[0].url} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          <b>{formatValue(parseFloat(food.price))}</b>
        </p>
      </section>
      <section className="footer">
        <div className="availability-container">
          <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              defaultChecked={isAvailable}
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
