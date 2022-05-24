import { AttachMoney, Done } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import colors from "../../../config/colors";

import { Container, FunctionButton, ButtonContainer, ItemCard } from "./styles";

const availableItens = [
  { id: 1, name: "Somente Corte", price: 55.0 },
  { id: 2, name: "Corte + Barba", price: 70.0 },
  { id: 3, name: "Tatoo 1", price: 120.0 },
  { id: 4, name: "Corte + Hidratação", price: 70.0 },
];

function RightControlsPad({ ...other }) {
  return (
    <Container {...other}>
      <Box sx={{ flex: 1, alignSelf: "flex-start" }}>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          rowGap={1}
          justifyContent="space-between">
          {availableItens.map(item => (
            <ItemCard key={item.id}>{item.name}</ItemCard>
          ))}
        </Stack>
      </Box>
      <Box>
        <ButtonContainer>
          <FunctionButton bgColor={colors.warning}>
            <AttachMoney sx={{ mr: 1 }} fontSize="inherit" /> %
          </FunctionButton>
          <FunctionButton bgColor={colors.warning}>Cancelar</FunctionButton>
          <FunctionButton bgColor={colors.success}>
            <Done sx={{ mr: 1 }} fontSize="inherit" />
            Concluir
          </FunctionButton>
        </ButtonContainer>
      </Box>
    </Container>
  );
}

export default RightControlsPad;
