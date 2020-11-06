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
  height: auto;
  background: #f0f0f5;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);

  .dropzone-img {
    display: flex;
    justify-content: center;

    img {
      object-fit: cover;
      cursor: pointer;
      width: 150px;
      height: 90px;
      border-radius: 10px;
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 40px;
    }

    .img-delete {
      background: #ff1e1e;
      width: 25px;
      height: 25px;
      position: absolute;
      margin-left: -25px;
      border-radius: 50px;
      border: none;
      top: 30px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
      transition: 0.2s;

      &:hover {
        background: #ce0000;
      }
    }
  }

  .dropzone {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    width: 100%;
    height: 300px;
  }

  .product-field {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .product-description {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .product-aditional {
    display: flex;
    width: 100%;
    justify-content: center;
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

export const AditionalBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 1100px;
  margin-bottom: 10px;

  header {
    margin-bottom: 10px;
  }

  div {
    label {
      margin-left: 10px;
    }
  }
`;
