import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #b5b5b5;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #b5b5b5;
  color: #312e38;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #484848;
      border-color: #484848;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #484848;
    `}

  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;
    font-family: 'Roboto Slab',serif;
    font-size: 16px;
  }

  svg {
    margin-right: 16px;
  }
`;
