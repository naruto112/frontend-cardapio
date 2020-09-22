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

export const CardMenu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.067) 0px 4px 8px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  padding: 14px;
`;

export const View = styled.div`
  margin-left: 10px;
  width: 200px;
  height: 100%;
`;

export const GroupOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 10px;
  height: 100%;
  i {
    width: 6px;
    height: 6px;
    background: #ccc;
    margin-bottom: 2px;
    &::before {
      content: "";
    }
  }
`;

export const PanelView = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;

  span {
    border-radius: 2px;
    background-color: #d2d3d5;
    color: #96979a;
    font-style: italic;
    padding: 2px 8px;
    font-size: 0.8em;
    line-height: 1.3em;
    margin-bottom: 3px;
    border: 1px solid #ccc;
  }

  span.edit-itens {
    border-radius: 2px;
    background-color: #fff;
    color: #32323a;
    font-style: italic;
    padding: 2px 8px;
    font-size: 0.8em;
    line-height: 1.3em;
    margin-bottom: 2px;
    margin-left: 5px;
    border: 1px solid #ccc;
  }
`;
