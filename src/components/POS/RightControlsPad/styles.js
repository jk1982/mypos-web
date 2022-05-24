import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { experimental_sx as sx, Button } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
  padding: 1vh;
`;

export const FunctionButton = styled(Button, {
  shouldForwardProp: isPropValid,
})`
  display: flex;
  border-radius: 1vh;
  padding: 2vh;
  background-color: ${props => props.bgColor || colors.strong};
  color: ${props => props.fontColor || colors.white};
  flex: 1;

  ${sx({
    fontWeight: "bold",
    fontSize: props => props.fontSize || 18,
    boxShadow: 3,
  })};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 1vh;
`;

export const ItemCard = styled(Button)`
  display: flex;
  border-radius: 1vh;
  padding: 2vh;
  background-color: ${colors.strong};
  color: ${colors.success};

  ${sx({
    fontWeight: "bold",
    fontSize: props => props.fontSize || 14,
    boxShadow: 3,
  })};
`;
