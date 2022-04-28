import styled from "@emotion/styled";
import { experimental_sx as sx, Button } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
`;

export const AreaButton = styled(Button)(
  sx({
    backgroundColor: colors.light,
    borderRadius: 3,
    "& .MuiTypography-root": {
      textTransform: "none",
      textAlign: "left",
      alignSelf: "flex-start",
      color: colors.dark,
      fontFamily: "Quicksand",
    },
    marginRight: 5,
    minWidth: 150,
    minHeight: 120,
  }),
);
