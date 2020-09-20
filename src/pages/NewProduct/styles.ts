import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: auto;
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
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 600px;
  background: #f0f0f5;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);

  .dropzone {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    width: 100%;
    height: 300px;
  }

  .product-detail {
    width: 100%;
    display: flex;

    div {
      display: flex;
      padding-left: 40px;
    }
  }
`;

export const ProductFooter = styled.footer`
  display: flex;

  width: 1200px;
  height: 100px;
  background: #e4e4eb;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);

  .btn-save {
    background: #2e7735;
    &:hover {
      background: ${shade(0.2, "#2e7735")};
    }
  }

  .btn-trash {
    background: #bc4722;
    &:hover {
      background: ${shade(0.2, "#bc4722")};
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-left: 100px;
    margin-right: 50px;

    button {
      display: flex;
      margin-left: 10px;
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
