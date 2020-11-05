import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;

  button {
    width: 120px;
    height: 128px;
    background: #f0f0f5;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    img {
      width: 68px;
      height: 68px;
      margin-bottom: 10px;
    }

    &:hover {
      background: ${shade(0.02, "#fff")};
    }
  }

  .img-delete {
    background: #ff1e1e;
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: 104px;
    border-radius: 50px;
    border: none;
    top: 0px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    transition: 0.2s;

    &:hover {
      background: #ce0000;
    }
  }
`;
