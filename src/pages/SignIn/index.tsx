import React, { useRef } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Link } from "react-router-dom";

import { Container, Content, AnimationContainer } from "./styles";

import LogoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={() => {}}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
