import styled from "styled-components";

export const CardMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
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
