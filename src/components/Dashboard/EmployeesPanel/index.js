import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { EmployeeInfo, StyledTableRow } from "./styles";

const data = [
  {
    name: "Matheus da Silva",
    isActive: true,
    schedules: 28,
    sales: {
      today: 100,
      month: 386.5,
    },
    comission: 292,
  },
  {
    name: "Antonio Souza",
    isActive: false,
    schedules: 1,
    sales: {
      today: 50,
      month: 195,
    },
    comission: 131.95,
  },
  {
    name: "Vegas Vasconcelos",
    isActive: true,
    schedules: 12,
    sales: {
      today: 80,
      month: 409,
    },
    comission: 256.5,
  },
  {
    name: "José A. de Oliveira",
    isActive: true,
    schedules: 5,
    sales: {
      today: 50,
      month: 350,
    },
    comission: 215.45,
  },
];

function EmployeesPanel() {
  // const options =
  //   style === "currency"
  //     ? { maximumFractionDigits: 0, style, currency: "BRL" }
  //     : { maximumSignificantDigits: 4, style };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 8 }}>
      <Table aria-label="Tabela de colaboradores">
        <TableHead>
          <TableRow>
            <TableCell>Colaboradores</TableCell>
            <TableCell align="right">Vendas (Hoje)</TableCell>
            <TableCell align="right">Vendas (Mês)</TableCell>
            <TableCell align="right">Agendados</TableCell>
            <TableCell align="right">Comissões</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <StyledTableRow
              key={item.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell component="th" scope="row">
                <EmployeeInfo isActive={item.isActive}>
                  <Box>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="h3">
                      {item.isActive ? "Ativo" : "Inativo"}
                    </Typography>
                  </Box>
                </EmployeeInfo>
              </TableCell>
              <TableCell align="right">
                {new Intl.NumberFormat("pt-BR", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                }).format(item.sales.today)}
              </TableCell>
              <TableCell align="right">
                {new Intl.NumberFormat("pt-BR", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                }).format(item.sales.month)}
              </TableCell>
              <TableCell align="right">{item.schedules}</TableCell>
              <TableCell align="right">
                {new Intl.NumberFormat("pt-BR", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                }).format(item.comission)}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeesPanel;
