import React from "react";
import { Box, Stack } from "@mui/material";

import colors from "../../config/colors";
import useAppBarHeight from "../../hooks/useAppBarHeight";

import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import CheckoutItensArea from "../../components/POS/CheckoutItensArea";
import TopBar from "../../components/POS/TopBar";
import TopControlsPad from "../../components/POS/TopControlsPad";
import RightControlsPad from "../../components/POS/RightControlsPad";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      isNumericString
      allowNegative={false}
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const currentClient = {
  id: 1,
  name: "Cliente Genérico",
  imgUrl: "",
  visitCount: 0,
  lastVisit: "1649716782",
  scheduled: false,
};

const currentAtendee = {
  id: 105,
  name: "Benjamin",
  imgUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  currentChair: 1,
};

const ticket = {
  client: currentClient,
  attendee: currentAtendee,
  tasks: [
    { id: 1, name: "Corte", price: 50.0, qtde: 1, discount: 0 },
    { id: 2, name: "Barba", price: 30.0, qtde: 1, discount: 0 },
  ],
};

function POS() {
  const title = "Barbearia do Benjamin";
  const barHeight = useAppBarHeight();

  return (
    <>
      <TopBar title={title} />

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
        <Stack flex={5} spacing={1}>
          <TopControlsPad ticket={ticket} />
          <CheckoutItensArea ticket={ticket} />
        </Stack>
        <RightControlsPad style={{ flex: 2 }} />
      </Box>
    </>
  );
}

export default POS;
