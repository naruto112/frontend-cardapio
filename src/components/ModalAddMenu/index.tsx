import React, { useRef, useCallback } from "react";
import Modal from "../Modal";

import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { Form } from "./styles";

interface ICreateMenuData {
  id: string;
  owner: string;
  name: string;
  sequence: number;
  visible: number;
  products: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddMenu: (menu: ICreateMenuData) => void;
}

const ModalAddMenu: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddMenu,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateMenuData) => {
      setIsOpen();
      handleAddMenu(data);
    },
    [handleAddMenu, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Cardapio</h1>
        <InputRow name="name" placeholder="Ex: Almoço do mês" />
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
