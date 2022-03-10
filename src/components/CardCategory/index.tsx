import React from "react";
import {Category, Container } from "./styles";

interface CardCategoryProps {
  active?: boolean;
}

export function CardCategory({active = false}: CardCategoryProps) {
  return (
    <Container active={active}>
      <Category active={active}>Todos</Category>
    </Container>
  );
}