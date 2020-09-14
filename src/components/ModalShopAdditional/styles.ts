import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
  img {
    object-fit: cover;
    width: 100%;
    height: 180px;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 10px;
  }

  div.additional {
    margin-top: 20px;
    margin-bottom: 40px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const ContentInformation = styled.div`
  width: 100%;
  height: 100%;

  strong {
    margin-top: 10px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    color: #000000;
  }

  main {
    margin-top: 10px;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #3d3d4d;
  }
`;
