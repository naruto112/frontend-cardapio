import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import { Error } from "./styles";
import { FiAlertCircle } from "react-icons/fi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: boolean;
    label: JSX.Element;
  }[];
}

const InputCheckBox: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, error, defaultValue = [] } = useField(name);

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
        <label htmlFor={option.id} key={option.id}>
          <input
            defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
            ref={(ref) => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            value={String(option.value)}
            type="checkbox"
            id={option.id}
            {...rest}
          />
          {option.label}
        </label>
      ))}
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </div>
  );
};

export default InputCheckBox;
