import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { Shimmer } from "react-shimmer";
import { FiEdit, FiEyeOff } from "react-icons/fi";

import { CardMenu, View, GroupOrder, PanelView } from "./styles";
import { Link } from "react-router-dom";

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface IMenu {
  index: number;
  id: number;
  title: string;
  quantity: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const Menu: React.FC<IMenu> = ({ index, title, quantity, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "MENU", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "MENU",
    hover(item: DragItem, monitor: DropTargetMonitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      if (targetSize) {
        const targetCenter = (targetSize?.bottom - targetSize?.top) / 2;

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
    <CardMenu ref={ref} style={{ opacity, cursor: "pointer" }}>
      <GroupOrder>
        <i></i>
        <i></i>
        <i></i>
      </GroupOrder>
      <View>
        <strong>{!title ? <Shimmer width={100} height={15} /> : title}</strong>
        <PanelView>
          {!quantity ? (
            <Shimmer width={100} height={15} />
          ) : (
            <span>{quantity} itens</span>
          )}
          <span className="edit-itens">
            <Link to="/itens/1">
              <FiEdit size={14} />
            </Link>
          </span>
          <span className="edit-itens">
            <FiEyeOff size={14} />
          </span>
        </PanelView>
      </View>
    </CardMenu>
  );
};

export default Menu;
