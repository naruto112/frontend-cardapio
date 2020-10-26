import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import ReactInputMask from "react-input-mask";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
  containerStyle?: object;
  subtitle?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputRow: React.FC<InputProps> = ({
  mask,
  size,
  name,
  subtitle,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      clearValue: (pickerRef) => {
        pickerRef.setInputValue(null);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      {mask ? (
        <ReactInputMask
          mask={mask}
          style={{ width: size }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      ) : (
        <input
          style={{ width: size }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      )}

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default InputRow;
