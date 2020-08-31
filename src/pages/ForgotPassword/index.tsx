import React, { useRef, useCallback } from "react";
import { FiMail, FiLogIn } from "react-icons/fi";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Link } from "react-router-dom";

import { Container, Content, AnimationContainer } from "./styles";

import LogoImg from "../../assets/logo.svg";

import { api } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useToast } from "../../components/Toast";
import getValidationErrors from "../../utils/getValidationErros";

interface SignInFormData {
  email: string;
  password: string;
}

const ForgotPasswword: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        FormRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/password/forgot", {
          email: data.email,
        });

        addToast({
          type: "success",
          title: "E-mail de recuperação de senha enviado",
          description:
            "Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          FormRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na recuperação de senha",
          description:
            "Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente.",
        });
      }
    },
    [addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img className="logo" src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Button type="submit">Recuperar</Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ForgotPasswword;
