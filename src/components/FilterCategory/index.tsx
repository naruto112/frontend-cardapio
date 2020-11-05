import React, { ButtonHTMLAttributes } from "react";
import { FiTrash2 } from "react-icons/fi";

import { Container } from "./styles";

interface IPropsCategory extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  title: string;
  deleted?: boolean;
  containerStyle?: object;
  handleDeletedCategory?: () => void;
}

const FilterCategory: React.FC<IPropsCategory> = ({
  img,
  title,
  deleted,
  handleDeletedCategory,
  containerStyle = {},
  ...rest
}) => {
  return (
    <Container>
      <button style={containerStyle} {...rest}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </button>
      {deleted && (
        <button className="img-delete" onClick={handleDeletedCategory}>
          <FiTrash2 size={15} color="#F8F8FB" />
        </button>
      )}
    </Container>
  );
};

export default FilterCategory;
