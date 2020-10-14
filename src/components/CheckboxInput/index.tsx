import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from "react";
import { useField } from "@unform/core";
import InputMask from "react-input-mask";

import { Container, Error } from "./styles";
import { FiAlertCircle } from "react-icons/fi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: object;
  name: string;
  mask?: string;
  ValueChecked?: {
    id: string;
    name: string;
  }[];
  options: {
    id: string;
    name: string;
  }[];
}

interface IDv {
  id: string;
}

const CheckboxInput: React.FC<Props> = ({
  ValueChecked,
  mask,
  name,
  options,
  containerStyle = {},
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField, error, defaultValue = [] } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRefs.current?.length);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <div>
      {options.map((option, index) => (
        <Container
          key={option.id}
          style={containerStyle}
          isErrored={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
        >
          {mask ? (
            <InputMask
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              {...rest}
              mask={mask}
            />
          ) : (
            <>
              <label htmlFor={option.id}>
                <input
                  defaultChecked={defaultValue.find(
                    (dv: IDv) => dv.id === option.id
                  )}
                  ref={(ref) => {
                    inputRefs.current[index] = ref as HTMLInputElement;
                  }}
                  value={option.id}
                  type="checkbox"
                  id={option.id}
                  {...rest}
                />
                {option.name}
              </label>
            </>
          )}

          {error && (
            <Error title={error}>
              <FiAlertCircle color="#c53030" size={20} />
            </Error>
          )}
        </Container>
      ))}
    </div>
  );
};

export default CheckboxInput;
