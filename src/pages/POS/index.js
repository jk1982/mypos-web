import { Box } from "@mui/material";
import React from "react";

import Attendees from "../../components/POS/Attendees";
import Keyboard from "../../components/POS/Keyboard";
import TopBar from "../../components/POS/TopBar";

import colors from "../../config/colors";
// import { Container } from './styles';

function POS() {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        title="Barbearia do Benjamin"
        sx={{
          backgroundColor: colors.background,
          color: colors.dark,
        }}></TopBar>
      <Attendees />
      <Keyboard />
    </Box>
  );
}

export default POS;
