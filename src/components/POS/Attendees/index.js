import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FlashAutoOutlined, PersonAddOutlined } from "@mui/icons-material";
import moment from "moment";

import colors from "../../../config/colors";

import AtendeeCard from "../AtendeeCard";
import LabeledBox from "../../LabeledBox";

const currentClient = {
  name: "João da Silva",
  imgUrl: "https://randomuser.me/api/portraits/men/33.jpg",
  tasks: [{ id: 1, name: "Corte", price: "50.00" }],
  visitCount: 5,
  lastVisit: "1649716782",
  scheduled: true,
};

const pendingClients = [
  {
    name: "Marco Antônio",
    imgUrl: "",
    tasks: [
      { id: 1, name: "Corte", price: "50.00" },
      { id: 2, name: "Barba", price: "30.00" },
    ],
    visitCount: 22,
    lastVisit: "1649716782",
    scheduled: true,
  },
  {
    name: "Pedro Hertal",
    imgUrl: "https://randomuser.me/api/portraits/men/63.jpg",
    tasks: [
      { id: 1, name: "Corte", price: "50.00" },
      { id: 3, name: "Tatoo", price: "250.00" },
    ],
    visitCount: 11,
    lastVisit: "1649716782",
    scheduled: false,
  },
  {
    name: "José Egídio",
    imgUrl: "",
    tasks: [{ id: 1, name: "Corte", price: "50.00" }],
    visitCount: 3,
    lastVisit: "1649716782",
    scheduled: false,
  },
  {
    name: "Vampeta",
    imgUrl: "https://randomuser.me/api/portraits/men/57.jpg",
    tasks: [{ id: 3, name: "Tatoo", price: "370.00" }],
    visitCount: 1,
    lastVisit: "1649716782",
    scheduled: false,
  },
];

const scheduledClients = [
  {
    name: "Igor Chaide",
    imgUrl: "https://randomuser.me/api/portraits/men/17.jpg",
    tasks: [
      { id: 1, name: "Corte", price: "50.00" },
      { id: 2, name: "Barba", price: "30.00" },
    ],
    visitCount: 22,
    lastVisit: "1649716782",
    scheduled: true,
    scheduledTo: "1652277600",
    estimatedDuration: 60,
  },
  {
    name: "Claudio Figueiredo",
    imgUrl: "",
    tasks: [{ id: 1, name: "Corte", price: "50.00" }],
    visitCount: 22,
    lastVisit: "1649716782",
    scheduled: true,
    scheduledTo: "1652288400",
    estimatedDuration: 30,
  },
  {
    name: "Rodrigo Lessa",
    imgUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    tasks: [
      { id: 1, name: "Corte", price: "50.00" },
      { id: 2, name: "Barba", price: "30.00" },
    ],
    visitCount: 22,
    lastVisit: "1649716782",
    scheduled: true,
    scheduledTo: "1652385600",
    estimatedDuration: 60,
  },
];

const TopButtonPad = ({ name, backgroundColor, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "1vh",
        marginLeft: "1vh",
      }}>
      <Box
        boxShadow={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          borderRadius: "2vh",
          padding: "2vh",
        }}>
        <IconButton sx={{ color: colors.white }}>{icon}</IconButton>
      </Box>
      <Typography variant="button">{name}</Typography>
    </Box>
  );
};

function Attendees() {
  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        <LabeledBox
          title="Atendimento Atual"
          sx={{
            display: "flex",
            flex: 4,
            padding: "2vh",
            marginRight: "1vh",
          }}>
          {currentClient && (
            <AtendeeCard
              title={currentClient.name}
              imgUrl={currentClient.imgUrl}
              tasksList={currentClient.tasks}
              scheduled={currentClient.scheduled}
              style={{ minWidth: "100%" }}
            />
          )}
        </LabeledBox>
        <LabeledBox title="Ações" sx={{ display: "flex", flex: 1 }}>
          <TopButtonPad
            name="Novo"
            backgroundColor={colors.warning}
            icon={<PersonAddOutlined />}
          />
          <TopButtonPad
            name="Avulso"
            backgroundColor={colors.blue}
            icon={<FlashAutoOutlined />}
          />
        </LabeledBox>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        <LabeledBox
          title="Fila Atual"
          sx={{ display: "flex", flex: 1, p: "1vh" }}>
          {pendingClients.map(cli => (
            <Box
              key={cli.name}
              sx={{
                marginRight: "1vh",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}>
              <Avatar
                key={cli.name}
                src={cli.imgUrl}
                variant="circular"
                sx={{
                  minWidth: "7vh",
                  minHeight: "7vh",
                }}></Avatar>
              <Typography variant="caption">{cli.name}</Typography>
            </Box>
          ))}
        </LabeledBox>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        <LabeledBox title="Agenda" sx={{ display: "flex", flex: 1, p: "1vh" }}>
          <Stack spacing={2}>
            <Divider>Hoje</Divider>
            {scheduledClients
              .filter(
                x =>
                  moment.unix(x.scheduledTo).toDate().getDay() ===
                  new Date().getDay(),
              )
              .map(item => (
                <Paper key={item.name}>{item.name}</Paper>
              ))}
          </Stack>
        </LabeledBox>
      </Box>
    </Box>
  );
}

export default Attendees;
