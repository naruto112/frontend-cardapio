import React, { useRef, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiLock,
  FiMapPin,
  FiPhone,
  FiMap,
  FiHome,
} from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import getValidationErrors from "../../utils/getValidationErros";

import { useToast } from "../../components/Toast";

import { Container, Content, AnimationContainer } from "./styles";
import { api, apiCep } from "../../services/api";

import LogoImg from "../../assets/logo.svg";

import InputRow from "../../components/InputRow";
import Button from "../../components/Button";

interface SignUpFormData {
  first_name: string;
  second_name: string;
  contact: string;
  email: string;
  uf: string;
  city: string;
  cep: string;
  address: string;
  number: string;
  complement?: string;
  password: string;
  confirmation_password: string;
}

const SignUp: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [loading, setLoading] = useState("Cadastrar");
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        FormRef.current?.setErrors({});
        const schema = Yup.object().shape({
          first_name: Yup.string().required("Nome obrigatório"),
          second_name: Yup.string().required("Segundo nome obrigatório"),
          contact: Yup.string().required("Telefone de contato obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string()
            .required("Senha obrigatória")
            .min(8, "Mínimo de 8 caracteres"),
          confirmation_password: Yup.string()
            .required("Deve confirmar a senha")
            .oneOf([Yup.ref("password")], "Senha não confere")
            .min(8, "Mínimo de 8 caracteres"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading("Carregando...");

        const users = {
          first_name: data.first_name,
          second_name: data.second_name,
          email: data.email,
          password: data.password,
          phone: data.contact,
          city: data.city,
          f: data.uf,
          cep: data.cep,
          address: data.address,
          number: data.number,
          complement: data.complement,
        };

        await api.post("users", users);

        history.push("/");

        addToast({
          title: "Sucesso",
          description: "Cadastrado concluído, aguarde um e-mail de verificação",
          type: "success",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          FormRef.current?.setErrors(errors);
          return;
        }

        setLoading("Cadastrar");

        addToast({
          title: "Erro",
          description:
            "Não foi possível cadastrar, contate o suporte sistema@dstudium",
          type: "error",
        });
      }
    },

    [addToast, history]
  );

  const handleCep = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length >= 5 && event.target.value.length < 6) {
        FormRef.current?.setFieldValue("cep", `${event.target.value}-`);
        return;
      }

      if (event.target.value.length >= 9) {
        const cepValue = event.target.value.replace("-", "");

        const response = await apiCep.get(`${cepValue}/json`);
        const { bairro, localidade, logradouro, uf } = response.data;

        FormRef.current?.setFieldValue("neighborhood", bairro);
        FormRef.current?.setFieldValue("city", localidade);
        FormRef.current?.setFieldValue("address", logradouro);
        FormRef.current?.setFieldValue("uf", uf);
        return;
      }
    },
    []
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img className="logo" src={LogoImg} alt="Cardapio Digital" />
          <Form ref={FormRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <div>
              <InputRow
                size={20}
                containerStyle={{ width: 270 }}
                name="first_name"
                icon={FiUser}
                placeholder="Primeiro nome"
              />
              <InputRow
                containerStyle={{ width: 340 }}
                name="second_name"
                icon={FiUser}
                placeholder="Segundo nome"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 240 }}
                name="contact"
                icon={FiPhone}
                placeholder="Contato"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 280 }}
                name="email"
                icon={FiMail}
                placeholder="E-mail"
              />
              <InputRow
                mask="99999-999"
                size={20}
                containerStyle={{ width: 300 }}
                name="cep"
                icon={FiMapPin}
                placeholder="CEP"
                onChange={(e) => handleCep(e)}
              />
              <InputRow
                containerStyle={{ width: 270 }}
                name="uf"
                icon={FiMapPin}
                placeholder="UF"
                disabled={true}
              />
              <InputRow
                containerStyle={{ width: 300 }}
                name="city"
                icon={FiMapPin}
                placeholder="Cidade"
                disabled={true}
              />
              <InputRow
                containerStyle={{ width: 410 }}
                name="address"
                icon={FiMap}
                placeholder="Endereço"
              />
              <InputRow
                size={10}
                containerStyle={{ width: 140 }}
                name="number"
                icon={FiHome}
                placeholder="N°"
              />
              <InputRow
                size={8}
                containerStyle={{ width: 190 }}
                name="complement"
                icon={FiHome}
                placeholder="Complemento"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 230 }}
                name="neighborhood"
                icon={FiMap}
                placeholder="Bairro"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 210 }}
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Digite a senha"
              />
              <InputRow
                size={20}
                containerStyle={{ width: 210 }}
                name="confirmation_password"
                icon={FiLock}
                type="password"
                placeholder="Confirme a senha"
              />
            </div>
            <Button containerStyle={{ width: 300 }} type="submit">
              {loading}
            </Button>
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
