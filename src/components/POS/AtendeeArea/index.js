import React from "react";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Autorenew, Edit, GroupAdd, Search } from "@mui/icons-material";
import moment from "moment";

import { CardInfo, Container, Input, Label } from "./styles";
import useAppBarHeight from "../../../hooks/useAppBarHeight";

function AtendeeArea({ currentClient, currentAtendee, ...others }) {
  const appBarHeight = useAppBarHeight();

  return (
    <Container topBarHeight={appBarHeight} {...others}>
      <CardInfo>
        <h3>Cliente</h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start">
            <h4>{currentClient.name}</h4>
            <Avatar
              src={currentClient.imgUrl}
              variant="rounded"
              sx={{
                minWidth: "8vh",
                minHeight: "8vh",
              }}
            />
          </Stack>
          <Label>ID</Label>
          <Input>{currentClient.id}</Input>
          <Label>Total de Visitas</Label>
          <Input>{currentClient.visitCount}</Input>
          <Label>Agendado?</Label>
          <Input>{currentClient.scheduled ? "Sim" : "Não"}</Input>
          <Label>Últ. Visita</Label>
          <Input>
            {moment.unix(currentClient.lastVisit).format("DD/MM/yyyy")}
          </Input>
          <Divider sx={{ mt: 2 }} />
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <GroupAdd />
            </IconButton>
          </Stack>
        </Box>
      </CardInfo>

      <CardInfo>
        <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
          <h3>Colaborador</h3>
          <h4>{currentAtendee.name}</h4>
          <img
            src={currentAtendee.imgUrl}
            style={{ maxWidth: "18vh", maxHeight: "20vh" }}
          />
          <IconButton size="large">
            <Autorenew fontSize="inherit" />
          </IconButton>
        </Stack>
      </CardInfo>
    </Container>
  );
}

export default AtendeeArea;
