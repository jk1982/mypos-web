import styled from "styled-components";

import colors from "../../config/colors";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  background-color: ${colors.light};

  #logo {
    font-size: 18vh;
    transform: rotate(90deg);
    color: ${colors.warning};
    opacity: 0.6;
  }

  #logoText1 {
    font-size: 4vh;
  }

  #logoText2 {
    font-size: 8vh;
    font-family: "Parisienne", cursive;
  }

  #main {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    width: 30vh;
  }
`;
