import React, { useRef } from "react";
import Modal from "../Modal";

import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { Form } from "./styles";

interface ICreateProductData {
  image: string;
  title: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddProduct: (food: ICreateProductData) => void;
}

const ModalAddMenu: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddProduct,
}) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <h1>Nova Cardapio</h1>
        <InputRow name="name_menu" placeholder="Ex: Almoço do mês" />
        <button type="submit">
          <p className="text">Criar</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddMenu;
