import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import { FiSave, FiTrash2 } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { CarouselProvider, Slider } from "pure-react-carousel";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";

import {
  Container,
  ContentProduct,
  ProductDetail,
  ProductFooter,
  AditionalBar,
} from "./styles";

import getValidationErrors from "../../utils/getValidationErros";

import Header from "../../components/Header";
import Button from "../../components/Button";
import InputRow from "../../components/InputRow";
import Dropzone from "../../components/Dropzone";
import Select from "../../components/Select";
import TextArea from "../../components/Textarea";
import CheckboxInput from "../../components/CheckboxInput";
import { useToast } from "../../components/Toast";

import { api } from "../../services/api";
import ModalPhotoDetail from "../../components/ModalPhotoDetail";

interface IProduct {
  name: string;
  price: number;
  description: string;
  visible: number;
  stock: number;
  menu_id: string;
  category: ICategory;
  aditionals: IAditional[];
}

interface IAttachment {
  id: string;
  url: string;
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

const Detail: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [urlProduct, setUrlProduct] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [aditionals, setAditionals] = useState<IAditional[]>([]);
  const [attachment, setAttachment] = useState<IAttachment[]>([]);
  const [buttonSave, setButtonSave] = useState("Gravar");
  const [product, setProduct] = useState<IProduct>();
  const { addToast } = useToast();
  const history = useHistory();
  const { id } = useParams<IParams>();

  useEffect(() => {
    api.get(`products/id/${id}`).then((response) => {
      setProduct(response.data);
      setAttachment(response.data.attachment);
    });
    api.get("categories").then((response) => {
      setCategories(response.data);
    });

    api.get("aditionals").then((response) => {
      setAditionals(response.data);
    });
  }, [id]);

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

        setButtonSave("Gravando...");

        const { name, price, stock, description, category, aditionals } = data;

        let obj = [];
        for (let i = 0; aditionals.length > i; i++) {
          obj.push({ id: aditionals[i] });
        }

        const formData = Object.assign({
          id,
          name,
          price,
          stock,
          visible: 1,
          description,
          menu_id: id,
          category_id: category,
          aditionals: obj,
        });
        await api.put("/products", formData);

        const fileData = new FormData();

        if (selectedFile) {
          fileData.append("id", id);
          fileData.append("file", selectedFile);
          await api.patch("/products/attachment", fileData);
        }

        history.goBack();
        addToast({
          type: "success",
          title: "Produto atualizado!",
          description: "Seu produto foi atualizado com sucesso!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          FormRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [addToast, history, id, selectedFile]
  );

  const handleDeleteAttachment = useCallback(
    async (id: string) => {
      const data = Object.assign({
        id,
      });

      await api.post("attachments", data);

      setAttachment(attachment.filter((attach) => attach.id !== id));

      addToast({
        type: "success",
        title: "Imagem removida!",
        description: "Sua imagem foi removido com sucesso!",
      });
    },
    [attachment, addToast]
  );

  const toggleModal = (): void => {
    setModalOpen(!modalOpen);
  };

  const toggleImage = (url: string) => {
    setUrlProduct(url);
    toggleModal();
  };

  return (
    <Container>
      <Header route="detail" />
      <ModalPhotoDetail
        url={urlProduct}
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />
      <ContentProduct>
        <ProductDetail>
          <div className="dropzone-img">
            <CarouselProvider
              className="carosel"
              naturalSlideWidth={10}
              naturalSlideHeight={10}
              totalSlides={2}
            >
              <Slider>
                {attachment.map((file) => (
                  <Fragment key={file.id}>
                    <img
                      key={file.id}
                      src={file.url}
                      alt="Imagem produto"
                      onClick={() => toggleImage(file.url)}
                    />
                    <button
                      className="img-delete"
                      onClick={() => handleDeleteAttachment(file.id)}
                    >
                      <FiTrash2 size={15} color="#F8F8FB" />
                    </button>
                  </Fragment>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
          <Form
            ref={FormRef}
            initialData={product}
            onSubmit={handleSubmitProduct}
          >
            <div className="dropzone">
              <Dropzone
                title="Imagem do Produto"
                width="353px"
                height="241px"
                onFileUploaded={setSelectedFile}
              />
            </div>
            <div className="product-field">
              <InputRow
                size={60}
                maxLength={22}
                containerStyle={{ width: 400 }}
                name="name"
                placeholder="Nome do Produto. (máximo 22 caracteres)"
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
                idValue={product?.category.id}
                placeholder={product ? product.category.name : "Categorias..."}
                containerStyle={{ width: 270, height: 53 }}
                value={categories.filter(
                  (category) => category.name !== product?.category.name
                )}
              />
            </div>
            <div className="product-aditional">
              <AditionalBar>
                <header>
                  <strong>Adicionais:</strong>
                </header>
                <CheckboxInput
                  ValueChecked={product?.aditionals}
                  name="aditionals"
                  options={aditionals}
                />
              </AditionalBar>
            </div>
            <div className="product-description">
              <TextArea
                containerStyle={{ width: 1100, height: 170 }}
                name="description"
                placeholder="Digite a descrição do produto."
              />
            </div>
            <ProductFooter>
              <div>
                <Button type="submit">
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

export default Detail;
