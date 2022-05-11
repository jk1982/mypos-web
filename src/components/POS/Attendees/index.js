import React from "react";
import { Box, IconButton, Typography } from "@mui/material";

import colors from "../../../config/colors";
import { FlashAutoOutlined, PersonAddOutlined } from "@mui/icons-material";
import LabeledBox from "../../LabeledBox";

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
    <Box
      sx={{
        display: "flex",
        flex: 8,
        flexDirection: "column",
        alignItems: "flex-end",
        p: 2,
      }}>
      <LabeledBox title="Ações">
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
      <LabeledBox
        title="Atendimentos Pendentes"
        sx={{
          display: "flex",
          flex: 1,
          minWidth: "100%",
          alignSelf: "flex-start",
          marginTop: "2vh",
        }}></LabeledBox>
    </Box>
  );
}

export default Attendees;
