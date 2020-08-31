import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const apiIbge = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
});

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
ex;
