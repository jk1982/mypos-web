import React from "react";
import { Box, Typography } from "@mui/material";

import Card from "../../Card";
import colors from "../../../config/colors";

const tasksList = [
  { name: "Corte", color: colors.blue },
  { name: "Barba", color: colors.danger },
  { name: "Tatoo", color: colors.warning },
];

function Attendees() {
  return (
    <Box sx={{ display: "flex", flex: 8, flexDirection: "column", p: 2 }}>
      <Typography variant="h6">Cliente Atual</Typography>
      <Card
        title="João da Silva"
        imgUrl="avatar2.jpg"
        tasksList={tasksList}></Card>
      <Box sx={{ marginTop: "5vh" }}>
        <Typography variant="h6">Fila de Atendimento</Typography>
        <Card
          title="Pedro Hertal"
          imgUrl="avatar3.jpg"
          tasksList={tasksList}
          style={{ opacity: 0.7 }}></Card>
        <Card
          title="Marcelo Bonfá Rosa"
          imgUrl="avatar4.jpg"
          tasksList={tasksList}
          style={{ opacity: 0.7, marginTop: "2vh" }}></Card>
      </Box>
    </Box>
  );
}

export default Attendees;
