import React, { useRef, useState } from "react";
import Modal from "../Modal";

import Dropzone from "../../components/Dropzone";
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

const ModalAddCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddProduct,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [, setSelectedFile] = useState<File>();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <h1>Nova Categoria</h1>
        <Dropzone
          title="SVG Categoria"
          width="100%"
          height="241px"
          onFileUploaded={setSelectedFile}
        />
        <InputRow name="description" placeholder="Ex: Lanches" />
        <button type="submit" data-testid="add-food-button">
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
