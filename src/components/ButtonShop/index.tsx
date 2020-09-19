import React from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface IButtonProps {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
  click?: () => void;
}

const ButtonShop: React.FC<IButtonProps> = ({ icon: Icon, title, click }) => {
  return (
    <Container>
      <button type="submit" onClick={click}>
        <p className="text">{title}</p>
        {Icon && (
          <div className="icon">
            <Icon size={24} />
          </div>
        )}
      </button>
    </Container>
  );
};

export default ButtonShop;
