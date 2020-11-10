import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import Modal from "../Modal";

import {
  Form,
  ContentInformation,
  TicketInfo,
  Observation,
  Footer,
} from "./styles";
import { FiMinus, FiPlus, FiCheckCircle } from "react-icons/fi";
import ButtonShop from "../../components/ButtonShop";

import formatValue from "../../utils/formatValue";

import Burger2 from "../../assets/bg.jpg";
import { api } from "../../services/api";

interface IAditionals {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface IAttachment {
  id: string;
  url: string;
}

interface IProducts {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  aditionals: IAditionals[];
  attachment: IAttachment[];
}

interface ICreateAddtionalData {
  id?: string;
  name?: string;
  quantity: number;
  aditionals?: {
    name: string;
    quantity: number;
    price: number;
  }[];
  observation?: string;
  price?: number;
  numberProduct?: number;
}

interface IModalProps {
  id: string;
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAddtional: (addttional: ICreateAddtionalData) => void;
}

const ModalShopAdditional: React.FC<IModalProps> = ({
  id,
  isOpen,
  setIsOpen,
  handleAddAddtional,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [aditionals, setAditionals] = useState<IAditionals[]>([]);
  const [observation, setObservation] = useState("");
  const [addProduct, setAddProduct] = useState(1);
  const [priceProduct, setPriceProduct] = useState<number>(0);
  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    api.post("shop/products", { id }).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const toggleAdtional = (
    e: boolean,
    id: string,
    name: string,
    price: number,
    quantity: number
  ) => {
    if (e) {
      setAditionals([...aditionals, { id, name, price, quantity }]);
      if (priceProduct) {
        const totalPrice = Number(priceProduct) + Number(price);
        setPriceProduct(totalPrice);
      } else {
        if (product?.price) {
          const totalPrice = Number(product?.price) + Number(price);
          setPriceProduct(totalPrice);
        }
      }
    }
    if (!e) {
      const aditional = aditionals.filter((ad) => ad.id !== id);
      if (product?.price) {
        const totalPrice = Number(priceProduct) - Number(price);
        setPriceProduct(totalPrice);
      }
      setAditionals(aditional);
    }
  };

  const toggleAddProduct = useCallback(
    (item: number, price: number | undefined) => {
      const itens = ++item;
      if (price) {
        const totalPrice = price * itens;
        setPriceProduct(totalPrice);
      }
      setAddProduct(itens);
    },
    []
  );

  const toggleMinusProduct = (item: number, price: number | undefined) => {
    if (item === 1) {
      return false;
    }
    if (price) {
      const totalPrice = priceProduct - price;
      setPriceProduct(totalPrice);
    }
    setAddProduct(--item);
  };

  const handleSubmit = useCallback(
    (data: ICreateAddtionalData) => {
      handleAddAddtional(data);
    },
    [handleAddAddtional]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <img src={product?.attachment[0].url} alt={Burger2} />
        <ContentInformation>
          <strong>{product?.name}</strong>
          <main>{product?.description}</main>
        </ContentInformation>
        <TicketInfo>
          <span>Adicionais</span>
        </TicketInfo>
        <div className="additional">
          {product?.aditionals.map((aditional, index) => (
            <div className="add-subcategory" key={aditional.id}>
              <div className="label-subcategory">
                <span>{aditional.name}</span>
                <label>+ R$ {aditional.price}</label>
              </div>
              <div className="btn-subcategory">
                <input
                  onChange={(e) =>
                    toggleAdtional(
                      e.target.checked,
                      aditional.id,
                      aditional.name,
                      aditional.price,
                      addProduct
                    )
                  }
                  type="checkbox"
                  value={aditional.name}
                  id={aditional.id}
                />
              </div>
            </div>
          ))}
        </div>
        <TicketInfo>
          <span>Alguma observação?</span>
        </TicketInfo>
        <Observation>
          <textarea
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Ex: tirar a cebola, maionese ou alface"
          ></textarea>
        </Observation>
        <Footer>
          <div className="btn-subcategory-footer">
            <button
              onClick={() => toggleMinusProduct(addProduct, product?.price)}
            >
              <FiMinus size={16} color="#ea1d2c" />
            </button>
            <span>{addProduct}</span>
            <button
              onClick={() => toggleAddProduct(addProduct, product?.price)}
            >
              <FiPlus size={16} color="#50a773" />
            </button>
          </div>
          <ButtonShop
            icon={FiCheckCircle}
            title={`${
              !priceProduct
                ? product?.price && formatValue(product.price)
                : formatValue(priceProduct)
            }`}
            click={() =>
              handleSubmit({
                id: product?.id,
                name: product?.name,
                quantity: addProduct,
                observation: observation && observation,
                price: priceProduct ? priceProduct : product?.price,
                aditionals,
              })
            }
          />
        </Footer>
      </Form>
    </Modal>
  );
};

export default ModalShopAdditional;
