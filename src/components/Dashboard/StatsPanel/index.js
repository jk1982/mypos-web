import React from "react";
import { Box, Typography } from "@mui/material";
import { AreaButton, Container } from "./styles";

import colors from "../../../config/colors";

const StatsItem = ({ title, value, color, style = "decimal" }) => {
  const options =
    style === "currency"
      ? { maximumFractionDigits: 0, style, currency: "BRL" }
      : { maximumSignificantDigits: 4, style };

  return (
    <AreaButton valueColor={color}>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h3">
          {new Intl.NumberFormat("pt-BR", options).format(value)}
        </Typography>
      </Box>
    </AreaButton>
  );
};

function StatsPanel() {
  return (
    <Container>
      <StatsItem
        title="Total do Período"
        value={10254}
        color={colors.danger}
        style="currency"
      />
      <StatsItem
        title="Previsto"
        value={209}
        color={colors.blue}
        style="currency"
      />
      <StatsItem title="Agendados" value={27} color={colors.success} />
      <StatsItem
        title="Engajamento"
        value={67 / 100}
        color={colors.warning}
        style="percent"
      />
    </Container>
  );
}

export default StatsPanel;
