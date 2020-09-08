import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from "react";

import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";

import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

const Textarea: React.FC<TextAreaProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const textAraRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textAraRef.current?.value);
  }, []);

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAraRef.current,
      path: "value",
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
      <textarea
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        defaultValue={defaultValue}
        ref={textAraRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Textarea;
