import React, { useState, useCallback } from "react";

import { Container, TextInput, Icon } from "./styles";

interface InputProps {
  name?: string;
  placeholder: string;
}

const SearchInput: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <Icon name="search" size={20} color={"#C9CED6"} />

      <TextInput
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
