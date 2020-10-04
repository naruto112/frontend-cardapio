import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Container, BodyContainer, HeaderBody, BodyMenu } from "./styles";
import Header from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import ModalAddMenu from "../../components/ModalAddMenu";
import Menu from "../../components/Menu";
import { api } from "../../services/api";

interface IMenu {
  id: string;
  owner: string;
  name: string;
  sequence: number;
  visible: number;
  products: string;
}

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [list, setLists] = useState<IMenu[]>([]);

  useEffect(() => {
    api.get("menu").then((response) => {
      setLists(response.data);
    });
  }, []);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number, id: string) => {
      const dragCard = list[dragIndex];

      const data = update(list, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      });

      data.forEach((value, index) => {
        value.sequence = index;
      });

      api.put("menu/sequence", data);

      setLists(data);
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
              product={menu.products.length}
              moveCard={moveCard}
            />
          ))}
        </BodyMenu>
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;
