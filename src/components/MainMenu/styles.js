import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { experimental_sx as sx, List, ListItemButton } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AppMenu = styled(List, { shouldForwardProp: isPropValid })(
  ({ bottomMenu }) =>
    bottomMenu
      ? sx({ alignSelf: "flex-end", width: "100%" })
      : sx({ flex: 1, marginTop: 2 }),
);

export const CustomListItemButton = styled(ListItemButton)(
  sx({
    "&.Mui-selected": { backgroundColor: "#DCF7E3" },
    "&:hover": { backgroundColor: "#E5EFFF" },
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
    "& span": {
      fontFamily: "Quicksand",
    },
  }),
);

export const BottomButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5px;
  padding-top: 10px;
`;
