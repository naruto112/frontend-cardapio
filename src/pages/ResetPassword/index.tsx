import React, { useRef, useCallback, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { FiLock, FiLogIn } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErros";
import { api } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useToast } from "../../components/Toast";
import { Container, Content, AnimationContainer } from "./styles";
import LogoImg from "../../assets/logo.svg";

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = (params) => {
  const FormRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState("Alterar senha");

  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        FormRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required("Senha obrigatória"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), undefined],
            "Confirmação incorreta"
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading("Alterando...");

        const { password, password_confirmation } = data;
        const token = location.search.replace("?token=", "");

        if (!token) {
          throw new Error("");
        }

        await api.post("/password/reset", {
          password,
          password_confirmation,
          token,
        });

        history.push("/");

        addToast({
          type: "success",
          title: "Recuperação de senha",
          description: "O reset de sua senha foi efetuado com sucesso.",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          FormRef.current?.setErrors(errors);

          return;
        }

        setLoading("Alterar senha");

        addToast({
          type: "error",
          title: "Erro ao resetar senha",
          description: "Ocorreu um erro ao resetar sua senha, tente novamente",
        });
      }
    },
    [addToast, history, location.search]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img className="logo" src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button type="submit">{loading}</Button>
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

export default ResetPassword;
