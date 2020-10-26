import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 180px;
  background: #c72828;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin-top: 60px;

  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 40px;
      color: #fff;
    }
  }
`;

export const HeaderFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  background: #c72828;
  color: #fff;

  .delivery-top {
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OrderData = styled.div`
  h3 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }

  form {
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  .btn-order {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    p {
      padding-left: 110px;
      padding-right: 110px;
    }
  }
`;

export const SelectDelivery = styled.div`
  display: flex;
  justify-content: space-between;

  .selected {
    background: #e1faec;
    border: 2px solid #34cb79;
  }
`;

export const Orderyou = styled.div`
  width: 410px;
  height: 100%;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 8px;

  .content {
    padding: 28px;
    width: 410px;
    height: auto;

    h2 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 32px;
      color: #3d3d4d;
    }

    hr {
      margin-top: 24px;
      border: 1px solid #9f9999;
    }

    main {
      div.line-order {
        height: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          width: 200px;
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
          color: #717171;
        }

        strong {
          font-size: 16px;
          color: #717171;
        }
      }
    }

    section {
      div.line-order {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          width: 200px;
          font-weight: normal;
          font-size: 18px;
          line-height: 32px;
          color: #717171;
        }

        strong {
          font-size: 18px;
          color: #717171;
        }
      }
    }
  }
`;

export const OrderFooter = styled.div`
  width: 410px;
  height: auto;
  background: #e4e4eb;
  border-radius: 0px 0px 8px 8px;

  div.total-order {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 20px;
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      color: #717171;
    }

    strong {
      margin-right: 13px;
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      color: #717171;
    }
  }
`;
