import styled, { css } from "styled-components";
import { FiSearch } from "react-icons/fi";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border-radius: 10px;
  border-width: 2px solid;
  border-color: #6c6c80;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #c72828;
    `}
`;

export const TextInput = styled.input`
  flex: 1;
  color: #6c6c80;
  border: none;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    color: #a6acbe;
  }
`;

export const Icon = styled(FiSearch)`
  margin-right: 16px;
`;
