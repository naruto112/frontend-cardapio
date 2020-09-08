import styled from "styled-components";

export const Container = styled.div`
  max-width: auto;
`;

export const TitlePage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 48px;
  width: 100%;

  h1 {
    display: flex;
    margin-left: 125px;
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
`;

export const ProductDetail = styled.div`
  width: 1200px;
  height: 600px;
  background: #f0f0f5;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const ProductFooter = styled.footer`
  display: flex;

  width: 1200px;
  height: 100px;
  background: #e4e4eb;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-left: 100px;
    margin-right: 100px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      font-weight: 600;
      font-size: 14px;

      span {
        margin-left: 10px;
      }
    }
  }
`;
