import React from "react";
import Modal from "../Modal";

import { Container } from "./styles";

interface IModalProps {
  url: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalPhotoDetail: React.FC<IModalProps> = ({
  url,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <img src={url} alt={url} style={{ width: "100%", height: "100%" }} />
      </Container>
    </Modal>
  );
};

export default ModalPhotoDetail;
