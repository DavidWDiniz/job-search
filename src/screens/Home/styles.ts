import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container  = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  background-color: ${({theme}) => theme.colors.lightGray};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Greetings = styled.View``;

export const GreetingsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const GreetingsSubtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.blue};
`;

export const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

export const CardText = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export const CardSliderContainer = styled.View`
  height: 135px;
  margin-bottom: 25px;
`;

export const CardSlider = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 25,
  }
})`
  margin: 12px -25px -25px;
`;

export const CardCategorySliderContainer = styled.View`
  height: 22px;
  margin-bottom: 20px;
`;

export const CardCategorySlider = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 25
  }
})`
  margin: 12px -25px -25px;
`;