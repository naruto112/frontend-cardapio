import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: auto;
`;

export const ContentButtonHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    margin-right: 50px;

    button {
      display: flex;
      align-items: center;
      width: 200px;
      margin-right: 48px;
      margin-top: 48px;

      span {
        margin-left: 20px;
      }
    }
  }
`;

export const TitlePage = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  h1 {
    margin-left: 125px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;

  div {
    display: flex;
    width: 400px;
    align-items: center;
  }
`;

export const FilterTitle = styled.div`
  display: flex;
  width: 100%;

  strong {
    margin-left: 120px;
    margin-bottom: 20px;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    margin-left: 100px;

    button {
      width: 120px;
      height: 128px;
      background: #f0f0f5;
      border-radius: 8px;
      border: none;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 20px;

      img {
        width: 68px;
        height: 68px;
        margin-bottom: 10px;
      }

      &:hover {
        background: ${shade(0.1, "#fff")};
      }
    }
  }
`;
