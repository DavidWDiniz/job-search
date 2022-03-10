import React from "react";
import {
  Avatar,
  CardCategorySlider, CardCategorySliderContainer, CardSlider,
  CardSliderContainer, CardText, Container, Greetings, GreetingsSubtitle, GreetingsTitle, Header
} from "./styles";
import {Card} from "../../components/Card";
import {StatusBar, View} from "react-native";
import {SearchBar} from "../../components/SearchBar";
import {CardCategory} from "../../components/CardCategory";

const fakeData = {
  cards: [
    {
      id: "1",
      color: "blue" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png",
      wage: "12000",
      title: "Senior Project Manager",
      location: "São Paulo - SP",
      tag: [
        "Full Time",
        "Remoto",
        "CLT"
      ]
    },
    {
      id: "2",
      color: "white" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2017/02/Instagram-logo-500x281.png",
      wage: "6000",
      title: "Front end Developer",
      location: "Minas Gerais - MG",
      tag: [
        "Full Time",
        "Remoto",
        "PJ"
      ]
    },
    {
      id: "3",
      color: "blue" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x313.png",
      wage: "8000",
      title: "AWS Developer",
      location: "Florianópolis - SC",
      tag: [
        "Full Time",
        "Remoto",
      ]
    },
    {
      id: "4",
      color: "white" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png",
      wage: "7500",
      title: "Backend Developer",
      location: "São Paulo - SP",
      tag: [
        "Full Time",
        "Remoto",
        "CLT"
      ]
    },
    {
      id: "5",
      color: "blue" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png",
      wage: "5000",
      title: "Senior Project Manager",
      location: "São Paulo - SP",
      tag: [
        "Full Time",
        "Remoto",
        "CLT"
      ]
    },
    {
      id: "6",
      color: "white" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
      wage: "5000",
      title: "Senior Project Manager",
      location: "São Paulo - SP",
      tag: [
        "Full Time",
        "Remoto",
        "CLT"
      ]
    },
    {
      id: "7",
      color: "blue" as const,
      avatar: "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo-500x313.png",
      wage: "5000",
      title: "Senior Project Manager",
      location: "São Paulo - SP",
      tag: [
        "Full Time",
        "Remoto",
        "CLT"
      ]
    }
  ]
}

export function Home() {
  // const [searchText, setSearchText] = useState('');
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <Header>
        <Greetings>
          <GreetingsTitle>Olá, David</GreetingsTitle>
          <GreetingsSubtitle>Encontre a melhor vaga</GreetingsSubtitle>
        </Greetings>
        <Avatar source={{uri: "https://avatars.githubusercontent.com/u/20936380?v=4"}}/>
      </Header>
      <SearchBar/>
      <CardText>Mais Populares</CardText>
      <CardSliderContainer>
        <CardSlider>
          {fakeData && fakeData.cards.map(card => (
            <Card
              key={card.id}
              avatar={card.avatar}
              wage={card.wage}
              title={card.title}
              location={card.location}
              tag={card.tag}
              color={card.color}
            />
          ))}
        </CardSlider>
      </CardSliderContainer>
      <CardCategorySliderContainer>
        <CardCategorySlider>
          <CardCategory active/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
        </CardCategorySlider>
      </CardCategorySliderContainer>
      <View style={{flex: 1}}/>
    </Container>
  );
}