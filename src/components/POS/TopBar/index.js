import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import colors from "../../../config/colors";
import TopAvatarMenu from "../../Dashboard/TopAvatarMenu";

const Status = ({ ...style }) => {
  //faz a consulta aos serviços e banco

  return (
    <Typography sx={{ color: colors.success, fontWeight: "bold" }} {...style}>
      On-Line
    </Typography>
  );
};

export default function TopBar({ title }) {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        "& .MuiToolbar-root": {
          borderBottom: "1px dashed rgba(193, 193, 193, 0.4)",
        },
      }}>
      <Toolbar
        sx={{
          backgroundColor: colors.background,
          color: colors.dark,
          flex: 1,
        }}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}>
          <Typography variant="h6" sx={{ flex: 4 }} noWrap>
            {title}
            <Typography noWrap sx={{ flex: 2 }}>
              POS - Frente de Loja
            </Typography>
          </Typography>
          <Status style={{ flex: 2 }} />
          <Box
            sx={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Button
              variant="contained"
              disableElevation
              size="medium"
              color="warning"
              onClick={() => navigate("/")}>
              Sair
            </Button>
          </Box>
          <TopAvatarMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
