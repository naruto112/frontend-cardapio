import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface IPropsCategory extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  title: string;
  containerStyle?: object;
}

const FilterCategory: React.FC<IPropsCategory> = ({
  img,
  title,
  containerStyle = {},
  ...rest
}) => {
  return (
    <Container>
      <button style={containerStyle} {...rest}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </button>
    </Container>
  );
};

export default FilterCategory;
