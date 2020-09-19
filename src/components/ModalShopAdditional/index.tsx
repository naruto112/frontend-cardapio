import React, { useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import Modal from "../Modal";

import {
  Form,
  ContentInformation,
  TicketInfo,
  Observation,
  Footer,
} from "./styles";
import { FiCheckSquare, FiMinus, FiPlus, FiCheckCircle } from "react-icons/fi";
import InputRow from "../InputRow";
import ButtonShop from "../../components/ButtonShop";

import Burger2 from "../../assets/bg.jpg";

interface ICreateAddtionalData {
  addtional: object;
  observation: string;
  numberProduct: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAddtional: (addttional: ICreateAddtionalData) => void;
}

const ModalShopAdditional: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAddtional,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [addAddtional, setAddAddtional] = useState(0);
  const [addProduct, setAddProduct] = useState(0);

  const toggleAddAdtional = (item: number) => {
    setAddAddtional(++item);
  };

  const toggleMinusAdtional = (item: number) => {
    if (item === 0) {
      return false;
    }
    setAddAddtional(--item);
  };

  const toggleAddProduct = (item: number) => {
    setAddProduct(++item);
  };

  const toggleMinusProduct = (item: number) => {
    if (item === 0) {
      return false;
    }
    setAddProduct(--item);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <img src={Burger2} alt={Burger2} />
        <ContentInformation>
          <strong>Burger triplo-X</strong>
          <main>
            Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.
          </main>
        </ContentInformation>
        <TicketInfo>
          <span>Adicionais</span>
        </TicketInfo>
        <div className="additional">
          <div className="add-subcategory">
            <div className="label-subcategory">
              <span>Bacon</span>
              <label>+ R$ 1,00</label>
            </div>
            <div className="btn-subcategory">
              <button onClick={() => toggleMinusAdtional(addAddtional)}>
                <FiMinus size={16} color="#ea1d2c" />
              </button>
              <span>{addAddtional}</span>
              <button onClick={() => toggleAddAdtional(addAddtional)}>
                <FiPlus size={16} color="#50a773" />
              </button>
            </div>
          </div>
        </div>
        <TicketInfo>
          <span>Alguma observação?</span>
        </TicketInfo>
        <Observation>
          <textarea placeholder="Ex: tirar a cebola, maionese ou alface"></textarea>
        </Observation>
        <Footer>
          <div className="btn-subcategory-footer">
            <button onClick={() => toggleMinusProduct(addProduct)}>
              <FiMinus size={16} color="#ea1d2c" />
            </button>
            <span>{addProduct}</span>
            <button onClick={() => toggleAddProduct(addProduct)}>
              <FiPlus size={16} color="#50a773" />
            </button>
          </div>
          <ButtonShop icon={FiCheckCircle} title="R$ 19,90" />
        </Footer>
      </Form>
    </Modal>
  );
};

export default ModalShopAdditional;
