import {
  AddCircle,
  Autorenew,
  Edit,
  GroupAdd,
  RemoveCircle,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

import colors from "../../config/colors";
import useAppBarHeight from "../../hooks/useAppBarHeight";

import { Offset } from "./styles";

const currentClient = {
  id: 120,
  name: "João da Silva",
  imgUrl: "https://randomuser.me/api/portraits/men/33.jpg",
  tasks: [
    { id: 1, name: "Corte", price: "50.00" },
    { id: 2, name: "Barba", price: "30.00" },
  ],
  visitCount: 5,
  lastVisit: "1649716782",
  scheduled: true,
};

const currentAtendee = {
  id: 105,
  name: "Benjamin",
  imgUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  currentChair: 1,
};

const NumberButton = ({
  text,
  flex = 1,
  fontSize = 22,
  buttonColor = colors.dark,
  ...others
}) => {
  return (
    <Box sx={{ display: "flex", flex: flex }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.light,
          borderRadius: "2vh",
          p: "2vh",
          m: "1vh",
        }}
        {...others}>
        <Typography fontSize={fontSize} fontWeight="bold" color={buttonColor}>
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

const NumberButtonContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
      {children}
    </Box>
  );
};

function POS() {
  const title = "Barbearia do Benjamin";
  const barHeight = useAppBarHeight();

  console.log(barHeight);

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar
          style={{ padding: 0, margin: 0 }}
          sx={{
            backgroundColor: colors.strong,
            color: colors.white,
            flex: 1,
          }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pr={1}
            pl={1}
            sx={{ flex: 1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              alignContent="flex-start"
              spacing={1}>
              <Avatar
                src={require("../../assets/avatar.jpg")}
                variant="circular"
                sx={{
                  minWidth: "5vh",
                  minHeight: "5vh",
                }}
              />
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
              <Typography sx={{ color: colors.success, fontWeight: "bold" }}>
                On-Line
              </Typography>
              <Button
                variant="contained"
                disableElevation
                size="medium"
                color="warning">
                Sair
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          backgroundColor: colors.medium,
          overflowY: "auto",
          p: 1,
          gap: "1vh",
          height: `calc(100vh - ${barHeight}px)`,
          display: "flex",
          mt: `${barHeight}px`,
        }}>
        <Box
          sx={{
            display: "flex",
            flex: 2,
            flexDirection: "column",
            alignSelf: "flex-start",
            gap: "1vh",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: colors.white,
              borderRadius: "1vh",
              p: "1vh",
              boxShadow: 5,
            }}>
            <Typography sx={{ color: colors.success, fontWeight: "bold" }}>
              Cliente
            </Typography>
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
                <Typography sx={{ fontWeight: "bold" }}>
                  {currentClient.name}
                </Typography>
                <Avatar
                  src={currentClient.imgUrl}
                  variant="rounded"
                  sx={{
                    minWidth: "8vh",
                    minHeight: "8vh",
                  }}
                />
              </Stack>
              <Typography sx={{ color: colors.medium }}>ID</Typography>
              <Typography>{currentClient.id}</Typography>
              <Typography sx={{ color: colors.medium }}>
                Total de Visitas
              </Typography>
              <Typography>{currentClient.visitCount}</Typography>
              <Typography sx={{ color: colors.medium }}>Agendado?</Typography>
              <Typography>{currentClient.scheduled ? "Sim" : "Não"}</Typography>
              <Typography sx={{ color: colors.medium }}>Últ. Visita</Typography>
              <Typography>
                {moment.unix(currentClient.lastVisit).format("DD/MM/yyyy")}
              </Typography>
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
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: colors.white,
              boxShadow: 5,
              borderRadius: "1vh",
              p: "1vh",
            }}>
            <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: colors.success,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                }}>
                Colaborador
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {currentAtendee.name}
              </Typography>
              <img
                src={currentAtendee.imgUrl}
                style={{ maxWidth: "18vh", maxHeight: "20vh" }}
              />
              <IconButton size="large">
                <Autorenew fontSize="inherit" />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 4,
            mb: "1vh",
            backgroundColor: colors.white,
            boxShadow: 5,
            borderRadius: "1vh",
            p: "1vh",
          }}>
          <Stack spacing={1} display="flex" flex={1}>
            <TextField
              variant="outlined"
              InputProps={{
                sx: { borderRadius: "1vh", backgroundColor: colors.light },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchOutlined fontSize="inherit" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {currentClient.tasks.map(task => (
              <Box
                key={task.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "space-between",
                  backgroundColor: colors.success,
                  color: colors.white,
                  p: "1vh",
                  borderRadius: "1vh",
                }}>
                <Typography sx={{ fontWeight: "bold" }}>{task.name}</Typography>
                <Typography>
                  {new Intl.NumberFormat("pt-BR", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  }).format(task.price)}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="medium"
                    color="success"
                    sx={{ backgroundColor: colors.white }}>
                    <AddCircle fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    size="medium"
                    color="error"
                    sx={{ backgroundColor: colors.white }}>
                    <RemoveCircle fontSize="inherit" />
                  </IconButton>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 2,
            flexDirection: "column",
            mb: "1vh",
            p: "1vh",
            backgroundColor: "#C9CEDA",
          }}>
          <Box sx={{ display: "flex" }}>
            <Typography>Ticket Atend. nº: 1234567</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 2,
                justifyContent: "space-between",
              }}>
              <NumberButtonContainer>
                <NumberButton text="7" />
                <NumberButton text="8" />
                <NumberButton text="9" />
              </NumberButtonContainer>

              <NumberButtonContainer>
                <NumberButton text="4" />
                <NumberButton text="5" buttonColor={colors.blue} />
                <NumberButton text="6" />
              </NumberButtonContainer>

              <NumberButtonContainer>
                <NumberButton text="1" />
                <NumberButton text="2" />
                <NumberButton text="3" />
              </NumberButtonContainer>

              <NumberButtonContainer>
                <NumberButton text="00" />
                <NumberButton text="0" />
                <NumberButton text="," />
              </NumberButtonContainer>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <NumberButton text="<" buttonColor={colors.danger} flex={4} />
              <NumberButton
                text="2x"
                buttonColor={colors.blue}
                fontSize={16}
                flex={3}
                style={{ marginTop: 10, marginBottom: 10 }}
              />
              <NumberButton
                text="%"
                buttonColor={colors.warning}
                fontSize={26}
                flex={4}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default POS;
