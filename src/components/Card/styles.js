import styled from "@emotion/styled";

import colors from "../../config/colors";

export const CardContainer = styled.div`
  background-color: ${props => (props.color ? props.color : colors.light)};
  padding: 2vh;
  border-radius: 3vh;
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  min-height: 0px;

  .MuiTypography-root {
    font-weight: bold;
    padding: 1vh;
    align-self: center;
    vertical-align: top;
  }
`;

export const TagsComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  align-content: center;
  justify-content: space-between;
  padding: 2vh;

  .MuiChip-root {
    margin-left: 1vh;
  }
`;
