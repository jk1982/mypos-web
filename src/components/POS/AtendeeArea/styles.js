import styled from "@emotion/styled";
import { experimental_sx as sx } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  gap: 1vh;
  ${props =>
    props.topBarHeight &&
    `min-height: calc(100vh - ${props.topBarHeight + 13}px);`};
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 1vh;
  padding: 1vh;
  margin-bottom: 1vh;
  ${() => sx({ boxShadow: 5 })}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Quicksand";
    font-weight: bold;
    padding: 0;
    margin: 0;
  }

  h3 {
    color: ${colors.success};
    font-weight: bold;
    align-self: flex-start;
  }

  img {
    border: 1px solid ${colors.medium};
  }
`;

export const Label = styled.span`
  font-family: "Quicksand";
  font-weight: 700;
  color: ${colors.medium};
`;

export const Input = styled.span`
  font-family: "Quicksand";
  font-weight: 700;
  margin-bottom: 1vh;
`;
