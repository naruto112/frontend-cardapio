import React from 'react';

import { Container } from './styles';

interface IPropsCategory {
    img: string;
    title: string;
}

const FilterCategory: React.FC<IPropsCategory> = ({
    img,
    title
}) => {
  return (
    <Container>
          <button>
            <img src={img} alt={title} />
            <span>{title}</span>
          </button>
    </Container>
    );
}

export default FilterCategory;