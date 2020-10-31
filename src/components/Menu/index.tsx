import React, { useCallback, useRef, useState } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { Shimmer } from "react-shimmer";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { CardMenu, View, GroupOrder, PanelView, TitleMenu } from "./styles";
import { Link } from "react-router-dom";
import ModalEditMenu from "../ModalEditMenu";
import { api } from "../../services/api";
import { useToast } from "../Toast";

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface IEditMenu {
  id: string;
  owner: string;
  name: string;
  sequence: number;
  visible: number;
  products: string;
}

interface IMenu {
  index: number;
  id: string;
  title: string;
  product: number;
  moveCard: (dragIndex: number, hoverIndex: number, id: string) => void;
}

const Menu: React.FC<IMenu> = ({ index, title, product, moveCard, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [titleMenu, setTitleMenu] = useState(title);
  const { addToast } = useToast();

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

          moveCard(draggedIndex, targetIndex, id);

          item.index = targetIndex;
        }
      }
    },
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  const toggleModalEdit = (): void => {
    setModalOpenEdit(!modalOpenEdit);
  };

  const handleEditMenu = useCallback(
    async (data: IEditMenu) => {
      api.put("menu", {
        id,
        name: data.name,
      });
      addToast({
        type: "success",
        title: "Cardápio atualizado",
        description: "Seu cardápio foi atualizado com sucesso!",
      });
      setTitleMenu(data.name);
    },
    [id, addToast]
  );

  const handleDeleteMenu = useCallback((id: string) => {
    api.delete(`menu/${id}`);
    window.location.reload();
  }, []);

  return (
    <CardMenu ref={ref} style={{ opacity, cursor: "pointer" }}>
      <ModalEditMenu
        data={title}
        isOpen={modalOpenEdit}
        setIsOpen={toggleModalEdit}
        handleAddMenuEdit={handleEditMenu}
      />
      <GroupOrder>
        <i></i>
        <i></i>
        <i></i>
      </GroupOrder>
      <View>
        <TitleMenu>
          <strong>
            {!title ? <Shimmer width={100} height={15} /> : titleMenu}
          </strong>
          <span onClick={() => setModalOpenEdit(true)}>
            <FiEdit size={15} />
          </span>
        </TitleMenu>
        <PanelView>
          {product === null ? (
            <Shimmer width={100} height={15} />
          ) : (
            <span>{product} itens</span>
          )}
          <span className="edit-itens">
            <Link to={`/itens/${id}`}>Ver Produtos</Link>
          </span>
          <span className="edit-itens" onClick={() => handleDeleteMenu(id)}>
            <FiTrash2 size={14} />
          </span>
        </PanelView>
      </View>
    </CardMenu>
  );
};

export default Menu;
