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
  AditionalBar,
} from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import InputRow from "../../components/InputRow";
import Dropzone from "../../components/Dropzone";
import Select from "../../components/Select";
import TextArea from "../../components/Textarea";
import { useToast } from "../../components/Toast";
import getValidationErrors from "../../utils/getValidationErros";
import CheckboxInput from "../../components/CheckboxInput";

import { api } from "../../services/api";

interface IProduct {
  name: string;
  price: number;
  description: string;
  visible: number;
  stock: number;
  menu_id: string;
  category: string;
  checkbox: string[];
}

interface ICategory {
  id: string;
  name: string;
}

interface IAditional {
  id: string;
  name: string;
}

interface IParams {
  id: string;
}

const NewProduct: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const [selectedFileOne, setSelectedFileOne] = useState<File>();
  const [selectedFileTwo, setSelectedFileTwo] = useState<File>();
  const [selectedFileThree, setSelectedFileThree] = useState<File>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [aditionals, setAditionals] = useState<IAditional[]>([]);
  const [buttonSave, setButtonSave] = useState("Salvar");
  const history = useHistory();
  const { id } = useParams<IParams>();
  const { addToast } = useToast();

  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
    });

    api.get("aditionals").then((response) => {
      setAditionals(response.data);
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
          description: Yup.string()
            .required("Crie uma descrição para seu produto")
            .min(50),
          category: Yup.string().required("Selecione uma categoria"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setButtonSave("Salvando...");

        const { name, price, stock, description, category, checkbox } = data;

        let obj = [];

        for (let i = 0; checkbox.length > i; i++) {
          obj.push({ id: checkbox[i] });
        }

        const formData = Object.assign({
          name,
          price,
          stock,
          visible: 1,
          description,
          menu_id: id,
          category_id: category,
          aditionals: obj,
        });

        const response = await api.post("/products", formData);

        if (selectedFileOne) {
          const dataOne = new FormData();
          dataOne.append("file", selectedFileOne);
          dataOne.append("id", response.data.id);
          await api.patch("products/attachment", dataOne);
        }

        if (selectedFileTwo) {
          const dataTwo = new FormData();
          dataTwo.append("file", selectedFileTwo);
          dataTwo.append("id", response.data.id);
          await api.patch("products/attachment", dataTwo);
        }

        if (selectedFileThree) {
          const dataThree = new FormData();
          dataThree.append("file", selectedFileThree);
          dataThree.append("id", response.data.id);
          await api.patch("products/attachment", dataThree);
        }

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
    [addToast, history, id, selectedFileOne, selectedFileTwo, selectedFileThree]
  );

  return (
    <Container>
      <Header route="detail" />
      <ContentProduct>
        <ProductDetail>
          <Form ref={FormRef} onSubmit={handleSubmitProduct}>
            <div className="dropzone">
              <Dropzone
                title="Imagem do Produto"
                width="353px"
                height="241px"
                onFileUploaded={setSelectedFileOne}
              />
              <Dropzone
                title="Imagem do Produto"
                width="353px"
                height="241px"
                onFileUploaded={setSelectedFileTwo}
              />
              <Dropzone
                title="Imagem do Produto"
                width="353px"
                height="241px"
                onFileUploaded={setSelectedFileThree}
              />
            </div>
            <div className="product-field">
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
                containerStyle={{ width: 270, height: 53 }}
                value={categories}
              />
            </div>
            <div className="product-aditional">
              <AditionalBar>
                <header>
                  <strong>Adicionais:</strong>
                </header>
                <CheckboxInput
                  defaultChecked={false}
                  name="checkbox"
                  options={aditionals}
                />
              </AditionalBar>
            </div>
            <div className="product-description">
              <TextArea
                containerStyle={{ width: 1100, height: 170 }}
                name="description"
                placeholder="Digite a descrição do produto. (minimo de 50 caracteres)"
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
                  <span>{buttonSave}</span>
                </Button>
              </div>
            </ProductFooter>
          </Form>
        </ProductDetail>
      </ContentProduct>
    </Container>
  );
};

export default NewProduct;
