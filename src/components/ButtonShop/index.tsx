import React from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface IButtonProps {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
  disabled?: boolean;
  containerStyle?: object;
  click?: () => void;
}

const ButtonShop: React.FC<IButtonProps> = ({
  icon: Icon,
  title,
  click,
  containerStyle = {},
  disabled = false,
  ...rest
}) => {
  return (
    <Container>
      <button
        type="submit"
        onClick={click}
        style={containerStyle}
        disabled={disabled}
        {...rest}
      >
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
