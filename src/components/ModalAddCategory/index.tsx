import React, { useRef, useState, useCallback } from "react";

import Modal from "../Modal";

import Dropzone from "../../components/Dropzone";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import InputRow from "../InputRow";
import { Form } from "./styles";
import { api } from "../../services/api";

interface IAttachment {
  url: string;
}

interface ICreateCategorytData {
  id: string;
  image?: string;
  name: string;
  attachment: IAttachment[];
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
  const [selectedFile, setSelectedFile] = useState<File>();
  const formRef = useRef<FormHandles>(null);
  const [buttonSave, setButtonSave] = useState("Criar");

  const handleSubmit = useCallback(
    async (data: ICreateCategorytData) => {
      setButtonSave("Criando...");
      const { name } = data;

      const formData = Object.assign({
        name,
      });

      const response = await api.post("categories", formData);

      if (selectedFile) {
        const dataImage = new FormData();
        dataImage.append("file", selectedFile);
        dataImage.append("id", response.data.id);

        const responseImage = await api.patch(
          "categories/attachment",
          dataImage
        );

        const result = {
          id: response.data.id,
          name: response.data.name,
          attachment: [{ url: responseImage.data.url }],
        };

        setIsOpen();
        handleAddCategory(result);
      }
    },
    [handleAddCategory, setIsOpen, selectedFile]
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
          <p className="text">{buttonSave}</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddCategory;
