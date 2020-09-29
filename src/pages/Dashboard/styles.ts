import styled from "styled-components";

export const Container = styled.div`
  max-width: auto;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: 80px;

    h2 {
      display: flex;
      align-items: center;
      font-size: 34px;
    }

    button {
      display: flex;
      align-items: center;
      width: 140px;
      height: 40px;

      span {
        margin-left: 10px;
      }
    }
  }
`;

export const BodyMenu = styled.div`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding-left: 20px;
  padding-right: 20px;
  width: 700px;
  overflow-y: scroll;
  height: 650px;
`;
