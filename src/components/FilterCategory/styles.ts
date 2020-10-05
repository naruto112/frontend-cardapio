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
`;
