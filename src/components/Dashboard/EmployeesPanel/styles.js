import { styled } from "@mui/material/styles";
import isPropValid from "@emotion/is-prop-valid";
import { experimental_sx as sx, Box } from "@mui/material";

import TableRow from "@mui/material/TableRow";

import colors from "../../../config/colors";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: colors.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const EmployeeInfo = styled(Box, {
  shouldForwardProp: isPropValid,
})(props =>
  sx({
    width: "100%",
    height: "100%",
    p: 0,
    m: 0,
    backgroundColor: "transparent",
    border: 0,
    "& .MuiTypography-h6": {
      textTransform: "none",
      alignSelf: "flex-start",
      color: colors.dark,
      fontFamily: "Quicksand",
    },
    "& .MuiTypography-h3": {
      fontWeight: "bold",
      fontSize: 11,
      color: props.isActive ? colors.success : colors.warning,
      textAlign: "left",
    },
  }),
);
