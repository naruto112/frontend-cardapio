import { FormHandles } from "@unform/core";
import React, { useCallback, useRef, useState } from "react";
import { FiMap, FiMapPin, FiSearch } from "react-icons/fi";
import InputRow from "../InputRow";
import Modal from "../Modal";

import MapaImg from "../../assets/mapa.svg";
import { Form } from "./styles";
import { apiCep } from "../../services/api";
import InputMask from "../InputMask";

interface ILocation {
  adress: string;
  number: string;
  complement?: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAditional: () => void;
  handleLocation: (data: ILocation) => void;
}

interface IVisible {
  visible: "visible" | "hidden";
}

const ModalCheckin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAditional,
  handleLocation,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [buttonSave, setButtonSave] = useState(
    "Clique aqui para salvar sua localização"
  );

  const [visible, setVisible] = useState<IVisible>({ visible: "hidden" });
  const [alert, setAlert] = useState<IVisible>({ visible: "hidden" });

  const toggleModal = (): void => {};

  const handleSubmit = () => {
    setButtonSave("Salvando");

    const adress = formRef.current?.getFieldValue("adress");
    const number = formRef.current?.getFieldValue("numeric");
    const complement = formRef.current?.getFieldValue("complement");

    const data = {
      adress,
      number,
      complement,
    };

    handleAddAditional();
    handleLocation(data);

    localStorage.setItem("@Cardapio:location", JSON.stringify(data));

    toggleModal();
  };

  const handleCep = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setAlert({ visible: "hidden" });
      if (event.target.value.length >= 5 && event.target.value.length < 6) {
        formRef.current?.setFieldValue("cep", `${event.target.value}-`);
        return;
      }

      const cepValue = event.target.value.replace("-", "");

      if (/^[0-9]{8}$/.test(cepValue)) {
        await apiCep.get(`${cepValue}/json`).then((response) => {
          if (response.data.erro) {
            setAlert({ visible: "visible" });
            return;
          }
          const { logradouro } = response.data;
          formRef.current?.setFieldValue("adress", logradouro);
          setVisible({ visible: "visible" });
        });

        return;
      }
    },
    []
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="map-checkin">
          <img src={MapaImg} alt="Mapa Check-in" width={161} />
        </div>
        <h1>Onde você quer receber seu pedido?</h1>
        <div className="alert-cep" style={{ visibility: alert?.visible }}>
          <span>CEP não localizado, verifique novamente.</span>
        </div>
        <div className="input-cep">
          <InputMask
            mask="99999-999"
            size={20}
            containerStyle={{ width: 150 }}
            name="cep"
            icon={FiMapPin}
            placeholder="Digite o CEP"
            onChange={(e) => handleCep(e)}
          />
        </div>
        <div className="form-input" style={{ visibility: visible?.visible }}>
          <InputRow
            icon={FiSearch}
            name="adress"
            placeholder="Buscar endereço"
            containerStyle={{ width: 430 }}
            readOnly
          />
          <InputRow
            icon={FiMapPin}
            name="numeric"
            type="text"
            placeholder="Número"
            containerStyle={{ width: 130 }}
          />
          <InputRow
            icon={FiMapPin}
            name="complement"
            type="text"
            placeholder="Complemento"
            containerStyle={{ width: 230 }}
          />
        </div>
        <button type="submit" style={{ visibility: visible?.visible }}>
          <span>
            <FiMap size={20} />
            {buttonSave}
          </span>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalCheckin;
