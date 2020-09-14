import React, { useRef } from "react";
import { FormHandles } from "@unform/core";
import Modal from "../Modal";

import { Form, ContentInformation, TicketInfo, Observation } from "./styles";
import { FiCheckSquare } from "react-icons/fi";
import InputRow from "../InputRow";

import Burger2 from "../../assets/bg.jpg";

interface ICreateAddtionalData {
  addtional: object;
  observation: string;
  numberProduct: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAddtional: (addttional: ICreateAddtionalData) => void;
}

const ModalShopAdditional: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAddtional,
}) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => {}}>
        <img src={Burger2} alt="Photo Product" />
        <ContentInformation>
          <strong>Burger triplo-X</strong>
          <main>
            Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.
          </main>
        </ContentInformation>
        <TicketInfo>
          <span>Adicionais</span>
        </TicketInfo>
        <div className="additional">
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
          <div>TESTE</div>
        </div>
        <TicketInfo>
          <span>Observação</span>
        </TicketInfo>
        <Observation>
          <textarea placeholder="Ex: tirar a cebola, maionese ou alface"></textarea>
        </Observation>
      </Form>
    </Modal>
  );
};

export default ModalShopAdditional;
