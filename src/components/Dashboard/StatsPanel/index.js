import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Container } from "./styles";

import colors from "../../../config/colors";

const StatsItem = ({ title, value, color, isCurrency = true }) => {
  const options = isCurrency
    ? { maximumFractionDigits: 0, style: "currency", currency: "BRL" }
    : { maximumSignificantDigits: 4 };

  return (
    <Button
      sx={{
        backgroundColor: colors.light,
        borderRadius: 3,
        "& .MuiTypography-root": { textTransform: "none" },
        marginRight: 5,
        minWidth: 150,
        minHeight: 120,
      }}>
      <Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            alignSelf: "flex-start",
            color: colors.dark,
            fontFamily: "Quicksand",
          }}>
          {title}
        </Typography>
        <Typography variant="h3" sx={{ p: 1, fontWeight: "bold", color }}>
          {new Intl.NumberFormat("pt-BR", options).format(value)}
        </Typography>
      </Box>
    </Button>
  );
};

function StatsPanel() {
  return (
    <Container>
      <StatsItem title="Total do Período" value={10254} color={colors.danger} />
      <StatsItem title="Previsto" value={209} color={colors.blue} />
      <StatsItem
        title="Agendados"
        value={27}
        color={colors.success}
        isCurrency={false}
      />
      <StatsItem
        title="Engajamentos"
        value={114}
        color={colors.warning}
        isCurrency={false}
      />
    </Container>
  );
}

export default StatsPanel;
