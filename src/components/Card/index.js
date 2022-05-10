import React from "react";
import { Avatar, Box, Chip, Typography } from "@mui/material";

import { CardContainer, TagsComponent } from "./styles";

function Card({
  title,
  imgUrl = null,
  tasksList = [{ name: "", color: "" }],
  actionsComponent = null,
  ...others
}) {
  let imgSource = undefined;

  try {
    imgSource = require(`../../assets/${imgUrl}`);
  } catch {
    imgSource = undefined;
  }

  return (
    <CardContainer {...others}>
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
                sx={{ color: task.color }}
              />
            ))}
          </TagsComponent>
        </Box>
      )}
    </CardContainer>
  );
}

export default Card;
