import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface ColorProps {
  color?: "blue" | "white";
}

export const Container  = styled(RectButton)<ColorProps>`
  background-color: ${({theme, color}) => color === "blue" ? theme.colors.blue : theme.colors.white};
  
  width: 240px;
  height: 135px;
  border-radius: 8px;
  
  padding: 12px;
  margin-right: 14px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  resize-mode: contain;
`;

export const Wage = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  color: ${({theme, color}) => color === "blue" ? theme.colors.white : theme.colors.darkGray};
`;

export const Content = styled.View`
  margin-top: 8px;
`;

export const Title = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({theme, color}) => color === "blue" ? theme.colors.white : theme.colors.darkGray};
`;

export const Location = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  color: ${({theme, color}) => color === "blue" ? theme.colors.white : theme.colors.textGray};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
  margin-top: 10px;
`;

export const Tags = styled.View`
  flex-direction: row;
`;

export const Tag = styled.View<ColorProps>`
  width: 56px;
  height: 15px;
  border-radius: 4px;
  
  margin-right: 8px;
  
  align-items: center;

  background-color: ${({theme, color}) => color === "blue" ? theme.colors.white : theme.colors.lightGray};
`;

export const Category = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(9)}px;
  color: ${({theme}) => theme.colors.blue};
`;

export const Icon = styled(Feather)<ColorProps>`
  color: ${({theme, color}) => color === "blue" ? theme.colors.white : theme.colors.darkGray};
`;