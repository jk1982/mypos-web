import React from "react";
import {
  Avatar,
  Button,
  Fab,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Cached, FlashAuto, SearchOutlined } from "@mui/icons-material";

import { Container, PersonCard } from "./styles";
import colors from "../../../config/colors";

function TopControlsPad({ ticket }) {
  return (
    <Container>
      <PersonCard style={{ flex: 1 }}>
        <Stack alignItems="flex-start">
          <h5>Colaborador</h5>
          <Avatar src={ticket.attendee.imgUrl} />
          <h6>{ticket.attendee.name}</h6>
        </Stack>
        <Button
          variant="outlined"
          color="warning"
          size="small"
          startIcon={<Cached />}>
          Trocar
        </Button>
      </PersonCard>
      <PersonCard style={{ flex: 1 }}>
        <Stack alignItems="flex-start">
          <h5>Cliente</h5>
          <Avatar src={ticket.client.imgUrl} />
          <h6>{ticket.client.name}</h6>
        </Stack>
        <TextField
          variant="outlined"
          placeholder="Procurar cliente"
          size="small"
          InputProps={{
            sx: {
              borderRadius: "1vh",
              backgroundColor: colors.light,
            },
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined fontSize="inherit" />
              </InputAdornment>
            ),
          }}
        />
      </PersonCard>
      <Fab variant="extended" color="primary" sx={{ alignSelf: "flex-end" }}>
        <FlashAuto sx={{ mr: 1 }} /> Genérico
      </Fab>
    </Container>
  );
}

export default TopControlsPad;
