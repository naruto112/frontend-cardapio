import React, { useState, useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import Image, { Shimmer } from "react-shimmer";
import Burger2 from "../../assets/bg.jpg";

import { Container, ContentProduct } from "./styles";
import { Link } from "react-router-dom";

interface ICardProduct {
  index: number;
  id: number;
  name: string;
  quantity: string;
  description: string;
  price: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const CardProduct: React.FC<ICardProduct> = ({
  index,
  id,
  name,
  quantity,
  description,
  price,
  moveCard,
}) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  async function toggleAvailable(): Promise<void> {
    setIsAvailable(!isAvailable);
  }

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: DragItem, monitor: DropTargetMonitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      if (targetSize) {
        const targetCenter = (targetSize?.top - targetSize?.bottom) / 2;

        const draggedOffset = monitor.getClientOffset();
        if (draggedOffset) {
          const draggedTop = draggedOffset.y - targetSize.top;

          if (draggedIndex < targetIndex && draggedTop < targetCenter) {
            return;
          }

          if (draggedIndex > targetIndex && draggedTop > targetCenter) {
            return;
          }

          moveCard(draggedIndex, targetIndex);

          item.index = targetIndex;
        }
      }
    },
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  return (
    <Link to="/detail">
      <Container ref={ref} style={{ opacity }}>
        <header>
          <Image
            src={Burger2}
            fallback={<Shimmer width={800} height={600} />}
          />
          {/* <img src={Burger2} alt="Burger" /> */}
          {/* <Shimmer width={800} height={600} /> */}
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
          </div>
        </ContentProduct>
      </Container>
    </Link>
  );
};

export default CardProduct;
