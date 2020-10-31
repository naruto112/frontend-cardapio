import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  padding: 48px 40px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #464b52;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #464b52;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
