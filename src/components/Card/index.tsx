import React from "react";
import {Avatar, Container, Content, Header, Title, Wage, Location, Footer, Tags, Icon, Tag, Category } from "./styles";

interface CardProps {
  color?: "blue" | "white";
}

export function Card({color = "blue"}: CardProps) {
  return (
    <Container
      color={color}
      onPress={() => {}}
    >
      <Header>
        <Avatar
          source={{uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png"}}
        />
        <Wage
          color={color}
        >
          R$ 5000 / mês
        </Wage>
      </Header>
      <Content>
        <Title
          color={color}
        >
          Senior Project Manager
        </Title>
        <Location
          color={color}
        >
          São Paulo - SP
        </Location>
      </Content>
      <Footer>
        <Tags>
          <Tag>
            <Category>Senior</Category>
          </Tag>
          <Tag>
            <Category>Remoto</Category>
          </Tag>
          <Tag>
            <Category>Full time</Category>
          </Tag>
        </Tags>
        <Icon
          color={color}
          name="heart"
          size={14}
        />
      </Footer>
    </Container>
  );
}