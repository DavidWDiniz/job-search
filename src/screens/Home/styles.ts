import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container  = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  background-color: ${({theme}) => theme.colors.lightGray};
`;

export const CardText = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export const CardSlider = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 25
  }
})`
  margin: 12px -25px -25px;
`;