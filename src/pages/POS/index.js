import React from "react";

import Attendees from "../../components/POS/Attendees";
import Keyboard from "../../components/POS/Keyboard";
import TopBar from "../../components/POS/TopBar";

import { Container, Offset } from "./styles";

function POS() {
  return (
    <>
      <TopBar title="Barbearia do Benjamin"></TopBar>
      <Offset />
      <Container>
        <Attendees />
        <Keyboard />
      </Container>
    </>
  );
}

export default POS;
