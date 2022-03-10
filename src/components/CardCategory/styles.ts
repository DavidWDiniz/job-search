import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";
import {RFValue} from "react-native-responsive-fontsize";

interface CardCategoryProps {
  active?: boolean;
}

export const Container = styled(RectButton)<CardCategoryProps>`
  width: 73px;
  height: 22px;
  border-radius: 8px;
  margin-right: 8px;
  
  align-items: center;
  justify-content: center;

  background-color: ${({theme, active}) => active ? theme.colors.blue : theme.colors.cardGray};
`;

export const Category = styled.Text<CardCategoryProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({theme, active}) => active ? theme.colors.white : theme.colors.textGray};
`;