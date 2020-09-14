import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  img {
    object-fit: cover;
    width: 100%;
    height: 180px;
    border-radius: 5px 5px 0px 0px;
  }

  div.additional {
    margin-top: 40px;
    margin-bottom: 40px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
