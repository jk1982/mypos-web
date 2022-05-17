import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import colors from "../../../config/colors";
import { KeyboardBackspace, KeyboardReturn } from "@mui/icons-material";

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

const NumberButton = ({
  children,
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
          {children}
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

function Keyboard({ ...style }) {
  return (
    <Box {...style}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <TextField
          name="totalPrice"
          placeholder="0,00"
          InputProps={{
            inputComponent: NumberFormatCustom,
            sx: {
              textAlign: "right",
              m: 0,
              borderRadius: "2vh",
              backgroundColor: colors.light,
              color: colors.dark,
            },
          }}
          inputProps={{
            min: 0,
            style: { textAlign: "right", fontSize: 20 },
          }}
          sx={{ display: "flex", flex: 1, mb: "1vh" }}
        />
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
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
          </NumberButtonContainer>

          <NumberButtonContainer>
            <NumberButton>4</NumberButton>
            <NumberButton buttonColor={colors.blue}>5</NumberButton>
            <NumberButton>6</NumberButton>
          </NumberButtonContainer>

          <NumberButtonContainer>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
          </NumberButtonContainer>

          <NumberButtonContainer>
            <NumberButton>00</NumberButton>
            <NumberButton>0</NumberButton>
            <NumberButton>,</NumberButton>
          </NumberButtonContainer>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <NumberButton buttonColor={colors.danger}>
            <KeyboardBackspace fontSize="large" />
          </NumberButton>
          <NumberButton buttonColor={colors.warning} fontSize={22} flex={2}>
            %
          </NumberButton>
          <NumberButton buttonColor={colors.blue} flex={4}>
            <KeyboardReturn />
          </NumberButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <NumberButton buttonColor={colors.danger} flex={0}>
          Cancelar
        </NumberButton>
        <NumberButton buttonColor={colors.success} flex={0}>
          Concluir
        </NumberButton>
      </Box>
    </Box>
  );
}

export default Keyboard;
