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
    padding-left: 10px;
    margin-bottom: 40px;
    height: 150px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const ContentInformation = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;

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

export const TicketInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  background: #e4e4eb;

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: #3d3d4d;
  }
`;


export const Observation = styled.div`
  margin-bottom: 40px;

  textarea {
    height: calc(4em + 40px);
    min-height: calc(4em + 40px);
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    margin-bottom: 10px;
    font-size: 1rem;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    color: #717171;
    font-weight: 400;
    resize: none;
  }
`;