import React, { useRef, useState, useCallback } from "react";

import Modal from "../Modal";

import Dropzone from "../../components/Dropzone";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { Form } from "./styles";

interface ICreateCategorytData {
  id: string;
  image?: string;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddCategory: (category: ICreateCategorytData) => void;
}

const ModalAddCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddCategory,
}) => {
  const [, setSelectedFile] = useState<File>();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateCategorytData) => {
      setIsOpen();
      handleAddCategory(data);
    },
    [handleAddCategory, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Categoria</h1>
        <Dropzone
          title="SVG Categoria"
          width="100%"
          height="241px"
          onFileUploaded={setSelectedFile}
        />
        <InputRow name="name" placeholder="Ex: Lanches" />
        <button type="submit">
          <p className="text">Criar categoria</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddCategory;
