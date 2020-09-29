import React, { useCallback, useState } from "react";
import update from "immutability-helper";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Container, BodyContainer, HeaderBody, BodyMenu } from "./styles";
import Header from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import ModalAddMenu from "../../components/ModalAddMenu";
import Menu from "../../components/Menu";

interface IMenu {
  id: number;
  name: string;
  quantity: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const ListMenu: IMenu[] = [
    {
      id: 1,
      name: "Mister 1",
      quantity: "12 itens",
      description: "Ovo de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 2,
      name: "Mister 2",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 3,
      name: "Mister 3",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 4,
      name: "Mister 4",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 5,
      name: "Mister 5",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 6,
      name: "Mister 6",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 7,
      name: "Mister 7",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 8,
      name: "Mister 8",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 9,
      name: "Mister 9",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 10,
      name: "Mister 10",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
    {
      id: 11,
      name: "Mister 11",
      quantity: "17 itens",
      description:
        "Carne de 150gm com cebola caramelizada e um toque de pimenta",
    },
  ];

  const [list, setLists] = useState(ListMenu);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = list[dragIndex];
      setLists(
        update(list, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [list]
  );

  return (
    <Container>
      <Header route="dashboard" />
      <ModalAddMenu
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddProduct={() => {}}
      />
      <BodyContainer>
        <HeaderBody>
          <div>
            <h2>Cardápios</h2>
            <Button onClick={() => setModalOpen(true)}>
              <FiPlus size={20} />
              <span>Cardapio</span>
            </Button>
          </div>
        </HeaderBody>

        <BodyMenu>
          {list.map((menu, index) => (
            <Menu
              index={index}
              id={menu.id}
              key={menu.id}
              title={menu.name}
              quantity={menu.quantity}
              moveCard={moveCard}
            />
          ))}
        </BodyMenu>
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;
