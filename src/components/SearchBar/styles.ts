import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Icon = styled(Feather)``;

export const Input = styled.TextInput.attrs({
  selectionColor: "#3E4F88"
})`
  width: 80%;
  height: 36px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.darkGray};
`;
