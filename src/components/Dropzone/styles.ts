import styled, { css } from "styled-components";

interface IContainerProps {
  width: string;
  height: string;
}

export const Container = styled.div<IContainerProps>`
  width: ${(props) => (props ? props.width : css`100%`)};
  height: ${(props) => (props ? props.height : css`100%`)};
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-right: 10px;
  margin-left: 10px;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #343a40;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;

    svg {
      color: #343a40;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;
