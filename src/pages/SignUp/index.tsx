import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Container, Content, AnimationContainer } from "./styles";

import LogoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={() => {}}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
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
