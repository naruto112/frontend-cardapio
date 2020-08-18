import React, { useRef, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface IStates {
  id: number;
  sigla: string;
  nome: string;
}

interface InputProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  placeholder: string;
  value: IStates[];
  changed?: boolean;
}

const Select: React.FC<InputProps> = ({
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
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      {Changed && (
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={Placeholder}
          ref={selectRef}
          onChange={handleChanged}
        >
          <option>Selecione UF</option>
          {Value.map((item) => (
            <option key={item.id}>{item.nome}</option>
          ))}
        </select>
      )}

      {!Changed && (
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={Placeholder}
          ref={selectRef}
        >
          <option>Selecione UF</option>
          {Value.map((item) => (
            <option key={item.id}>{item.nome}</option>
          ))}
        </select>
      )}
    </Container>
  );
};

export default Select;
