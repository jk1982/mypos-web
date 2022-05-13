import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import { AddCircleOutline, CalendarMonthOutlined } from "@mui/icons-material";

import { CardContainer, TagsComponent } from "./styles";
import colors from "../../../config/colors";

function getTaskColor(id) {
  switch (id) {
    case 1:
      return colors.blue;
    case 2:
      return colors.danger;
    case 3:
      return colors.warning;

    case 0:
    default:
      return colors.black;
  }
}

function AtendeeCard({
  title,
  imgUrl = null,
  tasksList = [],
  scheduled = false,
  pending = false,
  ...others
}) {
  return (
    <CardContainer {...others}>
      <Avatar
        src={imgUrl}
        variant="circular"
        sx={{
          minWidth: "10vh",
          minHeight: "10vh",
        }}></Avatar>

      {tasksList && (
        <Box>
          <Typography>{title}</Typography>

          <TagsComponent>
            {tasksList.map(task => (
              <Chip
                key={task.name}
                clickable={false}
                variant="outlined"
                label={task.name}
                sx={{ color: getTaskColor(task.id) }}
              />
            ))}
            <IconButton>
              <AddCircleOutline color="primary" />
            </IconButton>
          </TagsComponent>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          flexDirection: "column",
        }}>
        {scheduled && (
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignSelf: "flex-end",
              alignItems: "flex-start",
            }}>
            <Tooltip title="Cliente Agendado">
              <CalendarMonthOutlined
                sx={{ color: colors.strong, marginRight: "3vh" }}
              />
            </Tooltip>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignSelf: "flex-end",
            alignItems: "flex-end",
          }}>
          {pending ? (
            <Button
              variant="outlined"
              disableElevation
              size="medium"
              color="info">
              Atender
            </Button>
          ) : (
            <Button
              variant="outlined"
              disableElevation
              size="medium"
              color="success">
              Fechar Comanda
            </Button>
          )}
          <Button
            variant="outlined"
            disableElevation
            size="medium"
            sx={{ marginLeft: "1vh", color: colors.danger }}>
            Cancelar Atendimento
          </Button>
        </Box>
      </Box>
    </CardContainer>
  );
}

export default AtendeeCard;
