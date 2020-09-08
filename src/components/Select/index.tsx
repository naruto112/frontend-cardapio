import React, { useRef, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface IStates {
  id: number;
  sigla: string;
  nome: string;
}

interface InputProps {
  containerStyle?: object;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  placeholder: string;
  size?: number;
  value: IStates[];
  changed?: boolean;
}

const Select: React.FC<InputProps> = ({
  containerStyle = {},
  icon: Icon,
  placeholder: Placeholder,
  value: Value,
  changed: Changed,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleChanged = useCallback(() => {
    console.log("buscando cidades...");
  }, []);

  return (
    <Container style={containerStyle} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <select
        style={containerStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={Placeholder}
        ref={selectRef}
        onChange={handleChanged}
      >
        <option>{Placeholder}</option>
        {Value.map((item) => (
          <option key={item.id}>{item.nome}</option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
