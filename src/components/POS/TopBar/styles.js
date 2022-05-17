import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled(Toolbar)`
  padding: 0;
  margin: 0;
  background-color: ${colors.strong};
  flex: 1;
  font-family: Quicksand;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: Quicksand;
  }
`;

export const StatusLabel = styled.span`
  color: ${colors.success};
  font-weight: bold;
`;
