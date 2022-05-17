import styled from "@emotion/styled";
import { experimental_sx as sx } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vh;
  background-color: ${colors.white};
  border-radius: 1vh;
  padding: 1vh;
  ${() => sx({ boxShadow: 5 })}
`;

export const PersonCard = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Quicksand;
  margin-bottom: 1vh;

  button {
    align-self: flex-start;
    margin-left: 5vh;
  }

  h5 {
    margin: 0;
    font-weight: bold;
    color: ${colors.success};
    font-size: 2vh;
  }

  h6 {
    margin: 0;
    font-weight: bold;
  }
  ${".MuiAvatar-root"} {
    min-height: 5vh;
    min-width: 5vh;
  }
`;
