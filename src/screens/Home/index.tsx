import React from "react";
import {CardSlider, CardText, Container} from "./styles";
import {Card} from "../../components/Card";
import {StatusBar} from "react-native";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <CardText>Mais Populares</CardText>
      <CardSlider>
        <Card color="white"/>
        <Card color="blue"/>
        <Card color="white"/>
        <Card color="blue"/>
        <Card color="white"/>
        <Card color="blue"/>
        <Card color="white"/>
        <Card color="blue"/>
      </CardSlider>
    </Container>
  );
}