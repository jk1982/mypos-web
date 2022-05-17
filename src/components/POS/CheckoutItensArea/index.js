import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { AddCircle, RemoveCircle, SearchOutlined } from "@mui/icons-material";

import { Container } from "./styles";
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
        <Table style={{ fontFamily: "Quicksand" }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Preço Unit.</TableCell>
              <TableCell align="right">Qtde</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticket.tasks.map(task => (
              <TableRow
                key={task.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "bold", fontSize: "11pt" }}>
                  {task.name}
                </TableCell>
                <TableCell align="right">
                  {formatValueToPrice(task.price - task.discount)}
                </TableCell>
                <TableCell align="right">{task.qtde}</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  {formatValueToPrice(task.price * task.qtde)}
                </TableCell>
                <TableCell align="right">
                  <IconButton size="medium" color="error">
                    <RemoveCircle fontSize="inherit" />
                  </IconButton>
                  <IconButton size="medium" color="success">
                    <AddCircle fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
                <Grid item xs={12} />
                <Grid item xs={12} />
                <Grid item xs={4} sx={{ textAlign: "right" }}>
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
