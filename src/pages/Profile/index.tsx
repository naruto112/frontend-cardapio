import React, { useRef, useCallback, ChangeEvent } from "react";
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiMap,
  FiHome,
  FiLock,
  FiPhone,
  FiCamera,
} from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import getValidationErrors from "../../utils/getValidationErros";
import { useToast } from "../../components/Toast";
import { useAuth } from "../../hooks/auth";
import PlaceholderUser from "../../assets/placeholder.svg";

import { api, apiCep } from "../../services/api";

import { Content, AvatarInput } from "./styles";
import InputRow from "../../components/InputRow";
import Button from "../../components/Button";
import Header from "../../components/Header";

interface ProfileFormData {
  first_name: string;
  second_name: string;
  contact: string;
  email: string;
  uf: string;
  city: string;
  cep: string;
  number: string;
  neighborhood: string;
  address: string;
  complement?: string;
  password: string;
  old_password: string;
  confirmation_password: string;
}

const Profile: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append("avatar", e.target.files[0]);

        api.patch("/users/avatar", data).then((response) => {
          updateUser(response.data);
          addToast({
            type: "success",
            title: "Avatar atualizado!",
          });
        });
      }
    },
    [addToast, updateUser]
  );

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        FormRef.current?.setErrors({});
        const schema = Yup.object().shape({
          first_name: Yup.string().required("Nome obrigatório"),
          second_name: Yup.string().required("Segundo nome obrigatório"),
          contact: Yup.string(),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          cep: Yup.string(),
          uf: Yup.string().required(),
          city: Yup.string().required(),
          address: Yup.string().required(),
          number: Yup.string().required(),
          complement: Yup.string(),
          neighborhood: Yup.string(),
          old_password: Yup.string(),
          password: Yup.string().when("old_password", {
            is: (val) => !!val.length,
            then: Yup.string().required("Campo obrigatório"),
            otherwise: Yup.string(),
          }),
          confirmation_password: Yup.string()
            .when("old_password", {
              is: (val) => !!val.length,
              then: Yup.string().required("Campo obrigatório"),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref("password"), undefined], "Confirmação incorreta"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          first_name,
          second_name,
          contact,
          email,
          cep,
          uf,
          city,
          address,
          number,
          complement,
          neighborhood,
          old_password,
          password,
          confirmation_password,
        } = data;

        const formData = Object.assign(
          {
            first_name,
            second_name,
            contact,
            cep,
            email,
            uf,
            city,
            address,
            number,
            complement,
            neighborhood,
          },
          old_password
            ? {
                old_password,
                password,
                confirmation_password,
              }
            : {}
        );

        const response = await api.put("/profile", formData);

        updateUser(response.data);

        history.push("/dashboard");

        addToast({
          type: "success",
          title: "Perfil atualizado!",
          description:
            "Sua informações do perfil foram atualizadas com sucesso!",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          FormRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na atualização",
          description: "Ocorreu um erro ao atualizar o perfil, tente novamente",
        });
      }
    },
    [addToast, history, updateUser]
  );

  const handleCep = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace("_", "");
      if (value.length >= 9) {
        const cepValue = value.replace("-", "");

        const response = await apiCep.get(`${cepValue}/json`);
        const { bairro, localidade, logradouro, uf } = response.data;

        if (!bairro) {
          addToast({
            type: "error",
            title: "Erro CEP",
            description: "CEP Não localizado em nossa base, tente novamente",
          });
          return;
        }

        FormRef.current?.setFieldValue("neighborhood", bairro);
        FormRef.current?.setFieldValue("city", localidade);
        FormRef.current?.setFieldValue("address", logradouro);
        FormRef.current?.setFieldValue("uf", uf);
      }
    },
    [addToast]
  );

  return (
    <>
      <Header route="profile" />
      <Content>
        <Form
          ref={FormRef}
          initialData={{
            first_name: user.first_name,
            second_name: user.second_name,
            contact: user.phone,
            email: user.email,
            cep: user.cep,
            uf: user.uf,
            city: user.city,
            address: user.address,
            number: user.number,
            complement: user.complement,
            neighborhood: user.neighborhood,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            {user.avatar_url !== "" ? (
              <img src={user.avatar_url} alt="Avatar" />
            ) : (
              <img src={PlaceholderUser} alt="Avatar Placeholder" />
            )}

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>
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
              containerStyle={{ width: 500 }}
              name="complement"
              icon={FiHome}
              placeholder="Complemento"
            />
            <InputRow
              size={20}
              containerStyle={{ width: 360 }}
              name="neighborhood"
              icon={FiMap}
              placeholder="Bairro"
            />
          </div>
          <div>
            <InputRow
              size={20}
              containerStyle={{ width: 240 }}
              name="old_password"
              icon={FiLock}
              type="password"
              placeholder="Digite a antiga senha"
            />
            <InputRow
              size={20}
              containerStyle={{ width: 240 }}
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Digite a senha"
            />
            <InputRow
              size={20}
              containerStyle={{ width: 240 }}
              name="confirmation_password"
              icon={FiLock}
              type="password"
              placeholder="Confirme a senha"
            />
          </div>
          <Button containerStyle={{ width: 300 }} type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </Content>
    </>
  );
};

export default Profile;
