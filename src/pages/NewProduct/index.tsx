import React, { useState, useRef } from "react";
import { FiSave, FiTrash } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import {
  Container,
  ContentProduct,
  ProductDetail,
  ProductFooter,
} from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import InputRow from "../../components/InputRow";
import Dropzone from "../../components/Dropzone";
import Select from "../../components/Select";
import TextArea from "../../components/Textarea";

const NewProduct: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <Container>
      <Header route="detail" />
      <ContentProduct>
        <ProductDetail>
          <div className="dropzone">
            <Dropzone
              title="Imagem do Produto"
              width="353px"
              height="241px"
              onFileUploaded={setSelectedFile}
            />
            <Dropzone
              title="Imagem do Produto"
              width="353px"
              height="241px"
              onFileUploaded={setSelectedFile}
            />
            <Dropzone
              title="Imagem do Produto"
              width="353px"
              height="241px"
              onFileUploaded={setSelectedFile}
            />
          </div>
          <div className="product-detail">
            <Form ref={FormRef} initialData={{}} onSubmit={() => {}}>
              <div>
                <InputRow
                  size={60}
                  containerStyle={{ width: 400 }}
                  name="name_produtct"
                  placeholder="Nome do Produto"
                />
                <InputRow
                  size={60}
                  containerStyle={{ width: 200 }}
                  name="price"
                  placeholder="R$"
                />
                <InputRow
                  size={60}
                  containerStyle={{ width: 100 }}
                  name="quantity"
                  placeholder="Qtd."
                />
                <Select
                  name="category"
                  placeholder="Categoria"
                  containerStyle={{ width: 370, height: 53, marginLeft: 10 }}
                  value={[
                    {
                      id: 1,
                      nome: "Lanches",
                      sigla: "lanches",
                    },
                  ]}
                />
              </div>
              <div>
                <TextArea
                  containerStyle={{ marginLeft: 10, width: 1100, height: 170 }}
                  name="description"
                  placeholder="Digite a descrição do produto."
                />
              </div>
            </Form>
          </div>
        </ProductDetail>
        <ProductFooter>
          <div>
            <Button className="btn-save">
              <FiSave size={20} />
              <span>Salvar</span>
            </Button>
            <Button className="btn-trash">
              <FiTrash size={20} />
              <span>Descartar</span>
            </Button>
          </div>
        </ProductFooter>
      </ContentProduct>
    </Container>
  );
};

export default NewProduct;
