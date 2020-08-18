import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiMapPin } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Container, Content, AnimationContainer } from "./styles";

import LogoImg from "../../assets/logo.svg";

import { apiIbge } from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

interface IStates {
  id: number;
  sigla: string;
  nome: string;
}

const SignUp: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const [states, setStates] = useState<IStates[]>([]);
  const [city, setCity] = useState<IStates[]>([]);

  useEffect(() => {
    apiIbge.get("").then((response) => {
      setStates(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={() => {}}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Primeiro nome" />
            <Input name="name" icon={FiUser} placeholder="Segundo nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="name" icon={FiUser} placeholder="Cidade" />
            <Select
              name="name"
              icon={FiMapPin}
              placeholder="Selecione UF"
              value={states}
              changed={true}
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Digite a senha"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Confirme a senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
