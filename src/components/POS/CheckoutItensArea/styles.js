import styled from "@emotion/styled";
import { experimental_sx as sx } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 1vh;
  background-color: ${colors.white};
  border-radius: 1vh;
  padding: 1vh;
  ${() => sx({ boxShadow: 5 })}

  h1,
  h2,
  h3 {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 12pt;
  }
`;

export const TaskCard = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 1vh;

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    font-weight: bold;
  }
`;
