import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { experimental_sx as sx, Button } from "@mui/material";

import colors from "../../../config/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
`;

export const AreaButton = styled(Button, { shouldForwardProp: isPropValid })(
  props =>
    sx({
      backgroundColor: colors.light,
      borderRadius: 3,
      "& .MuiTypography-h6": {
        textTransform: "none",
        textAlign: "left",
        alignSelf: "flex-start",
        color: colors.dark,
        fontFamily: "Quicksand",
      },
      "& .MuiTypography-h3": {
        p: 1,
        fontWeight: "bold",
        color: props.valueColor,
        textAlign: "center",
      },
      marginRight: 5,
      minWidth: 150,
      minHeight: 120,
    }),
);
