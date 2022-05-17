import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Avatar, Button, Stack, Typography } from "@mui/material";

import { Container, StatusLabel } from "./styles";

export default function TopBar({ title }) {
  const navigate = useNavigate();
  const status = "On-Line";
  const loggedUser = {
    name: "João da Silva",
    imgUrl: "https://randomuser.me/api/portraits/men/18.jpg",
  };

  return (
    <AppBar position="fixed" elevation={0}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ flex: 1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="flex-start"
            spacing={1}>
            <Avatar
              src={loggedUser.imgUrl}
              alt={loggedUser.name}
              variant="circular"
              sx={{
                minWidth: "5vh",
                minHeight: "5vh",
                boxShadow: 3,
              }}
            />
            <Typography variant="caption" fontWeight="bold">
              {loggedUser.name}
            </Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center">
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
            <Typography noWrap>POS - Frente de Loja</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="flex-end"
            spacing={2}>
            <StatusLabel>{status}</StatusLabel>
            <Button
              variant="contained"
              disableElevation
              size="medium"
              color="warning"
              onClick={() => navigate("/")}>
              Sair
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
