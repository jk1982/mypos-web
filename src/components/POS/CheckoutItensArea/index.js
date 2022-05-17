import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { RemoveCircle, SearchOutlined } from "@mui/icons-material";

import { Container, TaskCard } from "./styles";
import colors from "../../../config/colors";

function formatValueToPrice(value) {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function CheckoutItensArea({ ticket, ...others }) {
  const subTotal = ticket.tasks
    .map(x => parseInt(x.price))
    .reduce((a, b) => a + b, 0);

  const discounts = ticket.tasks
    .map(x => parseInt(x.discount))
    .reduce((a, b) => a + b, 0);

  const total = subTotal - discounts;

  return (
    <Container {...others}>
      <Stack spacing={1} display="flex" flex={1}>
        <TextField
          variant="outlined"
          placeholder="Digite um produto ou serviço"
          size="small"
          InputProps={{
            sx: {
              borderRadius: "1vh",
              backgroundColor: colors.light,
              mb: "3vh",
              padding: 0,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchOutlined fontSize="inherit" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {ticket.tasks.map(task => (
          <TaskCard key={task.id}>
            <h3 sx={{ fontWeight: "bold" }}>{task.name}</h3>
            <h4>{formatValueToPrice(task.price)}</h4>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="medium"
                color="error"
                sx={{ backgroundColor: colors.white }}>
                <RemoveCircle fontSize="inherit" />
              </IconButton>
            </Stack>
          </TaskCard>
        ))}
      </Stack>
      <div style={{ alignContent: "flex-end" }}>
        <Stack spacing={1}>
          <Divider />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <h2>Subtotal</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2 style={{ textAlign: "right", marginRight: "5vh" }}>
                    {formatValueToPrice(subTotal)}
                  </h2>
                </Grid>

                <Grid item xs={6}>
                  <h2 style={{ color: colors.danger }}>Descontos</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2
                    style={{
                      color: colors.danger,
                      textAlign: "right",
                      marginRight: "5vh",
                    }}>
                    {formatValueToPrice(discounts)}
                  </h2>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <h1>Total</h1>
                </Grid>
                <Grid item xs={8}>
                  <h1
                    style={{
                      textAlign: "right",
                    }}>
                    {formatValueToPrice(total)}
                  </h1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </div>
    </Container>
  );
}

export default CheckoutItensArea;
