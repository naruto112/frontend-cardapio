import React, { useRef, useCallback, useState, useEffect } from "react";
import { IconBaseProps } from "react-icons";
import InputMask from "react-input-mask";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";
import { FiAlertCircle } from "react-icons/fi";

interface IStates {
  id: string;
  name: string;
}

interface InputProps {
  mask?: string;
  containerStyle?: object;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  placeholder: string;
  size?: number;
  value: IStates[];
  changed?: boolean;
}

const Select: React.FC<InputProps> = ({
  name,
  mask,
  containerStyle = {},
  icon: Icon,
  placeholder: Placeholder,
  value: Value,
  changed: Changed,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleChanged = useCallback(() => {}, []);

  return (
    <Container style={containerStyle} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      {mask ? (
        <InputMask
          style={{ width: 200 }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue="Selecione uma categoria"
          {...rest}
          mask={mask}
        />
      ) : (
        <select
          style={containerStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={Placeholder}
          ref={selectRef}
          onChange={handleChanged}
          {...rest}
        >
          <option>{Placeholder}</option>
          {Value.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
