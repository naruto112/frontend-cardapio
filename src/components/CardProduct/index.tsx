import React, { useState } from "react";
import Image, { Shimmer } from "react-shimmer";
import Comida from "../../assets/comida.svg";

import { Container, ContentProduct } from "./styles";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { api } from "../../services/api";

interface ICardProduct {
  index: number;
  id: number;
  name: string;
  quantity: string;
  description: string;
  visible: boolean;
  price: string;
  url: string | false;
}

const CardProduct: React.FC<ICardProduct> = ({
  index,
  id,
  name,
  quantity,
  description,
  price,
  visible,
  url,
}) => {
  const [isAvailable, setIsAvailable] = useState(visible);

  async function toggleAvailable(): Promise<void> {
    if (isAvailable) {
      await api.put("products", {
        id,
        visible: 0,
      });
    } else {
      await api.put("products", {
        id,
        visible: 1,
      });
    }

    setIsAvailable(!isAvailable);
  }

  return (
    <Container>
      <header>
        <Image
          src={url ? url : Comida}
          fallback={<Shimmer width={800} height={600} />}
        />
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
          <div className="availability-container ">
            <label className="switch tooltip">
              <span className="tooltiptext">Clique e desative o produto</span>
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
              />
              <span className="slider" />
            </label>
          </div>
          <Link to={`/detail/${id}`}>
            <FiEdit2 size={20} />
          </Link>
        </div>
      </ContentProduct>
    </Container>
  );
};

export default CardProduct;
