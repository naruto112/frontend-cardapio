import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  padding: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    font-size: 18px;
    &::placeholder {
      font-size: 18px;
    }
  }

  .alert-cep {
    display: flex;
    justify-content: center;
    border-radius: 2px;
    width: 100%;
    background: #ff9800;
    color: #fff;
    font-weight: 600;
    padding: 14px;
  }

  .input-cep {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .map-checkin {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .form-input {
    display: flex;
    width: 100%;
    flex-direction: row;
  }

  div {
    margin-bottom: 20px;
  }

  h1 {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    font-weight: 600;
    border-radius: 6px;
    border: 0;
    background: #1f1f1f;
    color: #fff;
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

    span {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 30px;
      }
    }
  }
`;
