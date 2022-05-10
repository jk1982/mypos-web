import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import colors from "../../../config/colors";

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

function Keyboard({ ...style }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4vh",
      }}
      {...style}>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1vh",
        }}>
        <NumberButton text="Cancelar" buttonColor={colors.warning} flex={0} />
        <NumberButton text="Concluir" buttonColor={colors.danger} flex={0} />
      </Box>
    </Box>
  );
}

export default Keyboard;
