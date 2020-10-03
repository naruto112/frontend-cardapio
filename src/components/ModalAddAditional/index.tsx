import React, { useRef } from "react";
import Modal from "../Modal";

import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";

interface ICreateProductData {
  image: string;
  title: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAditional: (food: ICreateProductData) => void;
}

const ModalAddAditional: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAditional,
}) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <h1>Nova Categoria</h1>
        <InputRow name="name" placeholder="Ex: Bacon" />
        <InputRow name="price" placeholder="Ex: R$ 12,90" />
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

export default ModalAddAditional;
