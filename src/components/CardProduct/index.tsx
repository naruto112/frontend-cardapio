import React, { useState } from "react";
import Image, { Shimmer } from "react-shimmer";
import Burger2 from "../../assets/bg.jpg";

import { Container, ContentProduct } from "./styles";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

interface ICardProduct {
  index: number;
  id: number;
  name: string;
  quantity: string;
  description: string;
  price: string;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const CardProduct: React.FC<ICardProduct> = ({
  index,
  name,
  quantity,
  description,
  price,
}) => {
  const [isAvailable, setIsAvailable] = useState(true);

  async function toggleAvailable(): Promise<void> {
    setIsAvailable(!isAvailable);
  }

  return (
    <Container>
      <header>
        <Image src={Burger2} fallback={<Shimmer width={800} height={600} />} />
      </header>
      <ContentProduct>
        <div className="top-card">
          <h2>{!name ? <Shimmer width={100} height={15} /> : name}</h2>
          <strong>
            {!quantity ? <Shimmer width={50} height={15} /> : quantity}
          </strong>
        </div>
        <div className="middle-card">
          <article>
            {!description ? <Shimmer width={210} height={15} /> : description}
          </article>
        </div>
        <div className="bottom-card">
          <span>
            {!price ? <Shimmer width={70} height={20} /> : `R$ ${price}`}{" "}
          </span>
          <div className="availability-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
              />
              <span className="slider" />
            </label>
          </div>
          <Link to="/product/detail">
            <FiEdit2 size={20} />
          </Link>
        </div>
      </ContentProduct>
    </Container>
  );
};

export default CardProduct;
