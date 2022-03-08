import React from "react";
import {Avatar, Container, Content, Header, Title, Wage, Location, Footer, Tags, Icon, Tag, Category } from "./styles";

interface CardProps {
  avatar: string;
  wage: string;
  title: string;
  location: string;
  tag?: string[];
  color?: "blue" | "white";
}

export function Card({avatar, wage, title, location, tag, color = "blue"}: CardProps) {
  return (
    <Container
      color={color}
      onPress={() => {}}
    >
      <Header>
        <Avatar
          source={{uri: avatar}}
        />
        <Wage
          color={color}
        >
          R$ {wage} / mês
        </Wage>
      </Header>
      <Content>
        <Title
          color={color}
        >
          {title}
        </Title>
        <Location
          color={color}
        >
          {location}
        </Location>
      </Content>
      <Footer>
        <Tags>
          {
            tag && tag.map(category => (
              <Tag key={category}>
                <Category>{category}</Category>
              </Tag>
            ))
          }
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