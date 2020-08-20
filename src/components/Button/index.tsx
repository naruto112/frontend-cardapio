import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  containerStyle?: object;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  containerStyle = {},
  children,
  loading,
  ...rest
}) => (
  <Container style={containerStyle} type="button" {...rest}>
    {loading ? "Carregando..." : children}
  </Container>
);

export default Button;
