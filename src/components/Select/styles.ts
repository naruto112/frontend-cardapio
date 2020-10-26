import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
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
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;
    margin-left: 10px;

    &::placeholder {
      color: #312e38;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 11px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      content: "";
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
