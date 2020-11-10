import React, { useRef, useCallback, useState } from "react";
import Modal from "../Modal";

import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";
import { api } from "../../services/api";

interface ICreateAditionaltData {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAditional: (aditional: ICreateAditionaltData) => void;
}

const ModalAddAditional: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAditional,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [buttonSave, setButtonSave] = useState("Criar");

  const handleSubmit = useCallback(
    async (data: ICreateAditionaltData) => {
      setButtonSave("Criando...");

      const { name, price, quantity } = data;

      const formData = Object.assign({
        name,
        quantity,
        price,
      });

      await api.post("aditionals", formData);
      setButtonSave("Criar");
      setIsOpen();
      handleAddAditional(data);
    },
    [handleAddAditional, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Adicionais</h1>
        <InputRow name="name" placeholder="Ex: Bacon" />
        <InputRow name="quantity" type="number" placeholder="Ex: 2 qtd." />
        <InputRow name="price" placeholder="Ex: R$ 12,90" />
        <button type="submit">
          <p className="text">{buttonSave}</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddAditional;
