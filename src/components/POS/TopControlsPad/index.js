import React from "react";
import {
  Avatar,
  Button,
  Divider,
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
      <PersonCard style={{ flex: 3 }}>
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
      <PersonCard style={{ flex: 4 }}>
        <Stack alignItems="flex-start">
          <h5>Cliente</h5>
          <Avatar src={ticket.client.imgUrl} />
          <h6>{ticket.client.name}</h6>
        </Stack>
        <Stack
          alignItems="flex-end"
          spacing={1}
          display="flex"
          flex={1}
          justifyContent="space-between">
          <TextField
            variant="outlined"
            placeholder="Procurar cliente"
            size="small"
            sx={{ ml: "2vh", alignSelf: "flex-end" }}
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
          <Fab variant="extended" color="primary" size="medium">
            <FlashAuto sx={{ mr: 1 }} /> Genérico
          </Fab>
        </Stack>
      </PersonCard>
    </Container>
  );
}

export default TopControlsPad;
