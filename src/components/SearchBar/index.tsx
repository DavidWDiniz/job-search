import React from "react";
import { Container, Icon, Input } from "./styles";
import {useTheme} from "styled-components";
import {TextInputProps} from "react-native";

export function SearchBar({...rest}: TextInputProps) {
  const theme = useTheme();
  return (
    <Container>
      <Icon
        name="search"
        size={19}
        color={theme.colors.textGray}
        {...rest}
      />
      <Input
        placeholder="Buscar Vagas"
      />
    </Container>
  );
}
