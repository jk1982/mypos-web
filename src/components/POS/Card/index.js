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

import {
  AddCircleOutline,
  CalendarMonthOutlined,
  CheckCircleOutlined,
  HourglassBottomOutlined,
  HourglassFullOutlined,
  HourglassTopOutlined,
  TimerOutlined,
} from "@mui/icons-material";

import { CardContainer, TagsComponent } from "./styles";
import colors from "../../../config/colors";

const startTime = "19:35";
const duration = "40min";

function Card({
  title,
  imgUrl = null,
  tasksList = [{ name: "", color: "" }],
  isActive = false,
  ...others
}) {
  let imgSource = undefined;

  try {
    imgSource = require(`../../../assets/${imgUrl}`);
  } catch {
    imgSource = undefined;
  }

  return (
    <CardContainer isActive={isActive} {...others}>
      {isActive && <CheckCircleOutlined color="success" />}
      {imgUrl && (
        <Avatar
          src={imgSource}
          variant="circular"
          sx={{
            minWidth: "10vh",
            minHeight: "10vh",
          }}></Avatar>
      )}
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
                sx={{ color: task }}
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
        <Box
          sx={{
            display: "flex",
            alignSelf: "flex-end",
            alignItems: "flex-end",
          }}>
          <Button
            variant="outlined"
            disableElevation
            size="medium"
            color="success"
            sx={{ visibility: isActive ? "hidden" : "visible" }}>
            Fechar Comanda
          </Button>
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

export default Card;
