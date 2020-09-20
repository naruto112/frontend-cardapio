import React from "react";

import { Container } from "./styles";
import NotFoundImg from "../../assets/erro-404.svg";

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src={NotFoundImg} alt="Not Found" />
      <h3>Não encontrou !</h3>
      <p>Desculpe oque você procura aqui não existe.</p>
    </Container>
  );
};

export default NotFound;
