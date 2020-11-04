import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  padding: 48px 40px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .alert-upload {
    width: 100%;
    margin-bottom: -30px;
    display: flex;
    justify-content: right;
    opacity: 0.7;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2d82d6;
      border-radius: 3px;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    span {
      margin-left: 10px;
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }

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

  img {
    width: 28%;
    height: 90%;
    border-radius: 10px;
    object-fit: cover;
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
