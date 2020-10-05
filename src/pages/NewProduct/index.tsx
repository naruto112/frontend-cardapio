import React, { useState, useRef, useCallback, useEffect } from "react";
import { FiSave, FiTrash } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
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
import { useToast } from "../../components/Toast";
import getValidationErrors from "../../utils/getValidationErros";

import { api } from "../../services/api";

interface IProduct {
  name: string;
  price: number;
  description: string;
  visible: number;
  stock: number;
  menu_id: string;
  category: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IParams {
  id: string;
}

const NewProduct: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const [, setSelectedFile] = useState<File>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const history = useHistory();
  const { id } = useParams<IParams>();
  const { addToast } = useToast();

  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleSubmitProduct = useCallback(
    async (data: IProduct) => {
      try {
        FormRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          price: Yup.string().required("Preço do produto"),
          stock: Yup.string().required("Deve colocar 1 produto no minínimo"),
          description: Yup.string().required(
            "Crie uma descrição para seu produto"
          ),
          category: Yup.string().required("Selecione uma categoria"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, price, stock, description, category } = data;

        const formData = Object.assign({
          name,
          price,
          stock,
          visible: 1,
          description,
          menu_id: id,
          category_id: category,
        });

        await api.post("/products", formData);

        history.goBack();

        addToast({
          type: "success",
          title: "Produto cadastrado!",
          description: "Seu produto foi cadastrado com sucesso!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          FormRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [addToast, history, id]
  );

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
            <Form ref={FormRef} onSubmit={handleSubmitProduct}>
              <div>
                <InputRow
                  size={60}
                  containerStyle={{ width: 400 }}
                  name="name"
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
                  containerStyle={{ width: 200 }}
                  name="stock"
                  placeholder="Qtd."
                />
                <Select
                  name="category"
                  placeholder="Categoria..."
                  containerStyle={{ width: 270, height: 53, marginLeft: 10 }}
                  value={categories}
                />
              </div>
              <div>
                <TextArea
                  containerStyle={{ marginLeft: 10, width: 1100, height: 170 }}
                  name="description"
                  placeholder="Digite a descrição do produto."
                />
              </div>
              <ProductFooter>
                <div>
                  <Button className="btn-trash">
                    <FiTrash size={20} />
                    <span>Descartar</span>
                  </Button>
                  <Button className="btn-save" type="submit">
                    <FiSave size={20} />
                    <span>Salvar</span>
                  </Button>
                </div>
              </ProductFooter>
            </Form>
          </div>
        </ProductDetail>
      </ContentProduct>
    </Container>
  );
};

export default NewProduct;
