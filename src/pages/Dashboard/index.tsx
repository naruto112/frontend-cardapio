import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  Container,
  BodyContainer,
  BodyMenu,
  CardMenu,
  PanelView,
  View,
  GroupOrder,
  HeaderBody,
} from "./styles";
import Header from "../../components/Header";
import { FiEdit, FiEyeOff, FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import ModalAddMenu from "../../components/ModalAddMenu";

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

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
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Almoço semanal</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
                <span className="edit-itens">
                  <FiEyeOff size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
          <CardMenu>
            <GroupOrder>
              <i></i>
              <i></i>
              <i></i>
            </GroupOrder>
            <View>
              <strong>Nome cardapio</strong>
              <PanelView>
                <span>4 itens</span>
                <span className="edit-itens">
                  <FiEdit size={14} />
                </span>
              </PanelView>
            </View>
          </CardMenu>
        </BodyMenu>
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;
