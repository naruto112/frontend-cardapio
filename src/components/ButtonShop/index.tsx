import React from 'react';
import {IconBaseProps} from "react-icons"

import { Container } from './styles';

interface IButtonProps {
  icon: React.ComponentType<IconBaseProps>
}

const ButtonShop: React.FC<IButtonProps> = ({
  icon: Icon,
}) => {
  return (
    <Container>
      <button type="submit">
          <p className="text">Ver Pedido</p>
          <div className="icon">
            <Icon size={24} />
          </div>
        </button>
    </Container>
  );
}

export default ButtonShop;