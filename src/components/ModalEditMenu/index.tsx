import { FormHandles } from "@unform/core";
import React, { useRef, useCallback } from "react";
import { FiCheckSquare } from "react-icons/fi";
import InputRow from "../InputRow";
import Modal from "../Modal";

import { Form } from "./styles";

interface IEditMenuData {
  id: string;
  owner: string;
  name: string;
  sequence: number;
  visible: number;
  products: string;
}

interface IModalProps {
  data: string;
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddMenuEdit: (menu: IEditMenuData) => void;
}

const ModalEditMenu: React.FC<IModalProps> = ({
  data,
  isOpen,
  setIsOpen,
  handleAddMenuEdit,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditMenuData) => {
      setIsOpen();
      handleAddMenuEdit(data);
    },
    [handleAddMenuEdit, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        initialData={{
          name: data,
        }}
        onSubmit={handleSubmit}
      >
        <h1>Editar Cardapio</h1>
        <InputRow name="name" placeholder="Ex: Almoço do mês" />
        <button type="submit">
          <p className="text">Salvar</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditMenu;
