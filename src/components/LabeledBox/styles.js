import styled from "@emotion/styled";
import { Box } from "@mui/material";

import colors from "../../config/colors";

export const Container = styled(Box)`
  display: flex;
  border: 1px solid #cecece;
  border-radius: 2vh;
  padding: 1vh;
`;

export const Label = styled.span`
  position: absolute;
  background-color: ${colors.background};
  font-weight: 700;
  font-variant: small-caps;
  margin-top: -2.8vh;
  font-family: Quicksand;
  padding-left: 1vh;
  padding-right: 1vh;
  padding-top: 0;
  padding-bottom: 0;
`;
