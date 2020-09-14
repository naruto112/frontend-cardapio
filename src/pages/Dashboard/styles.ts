import styled from "styled-components";

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
      width: 160px;
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
  margin-top: 10px;
  margin-bottom: 10px;

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
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 60%;
  max-height: 170px;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;

  div {
    flex: 0 0 auto;
  }
`;

export const Section = styled.div`
  display: flex;
  margin-top: 80px;
  width: 100%;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 120px;

  h1 {
    font-size: 26px;
    color: #9195a1;
  }
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
