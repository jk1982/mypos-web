import React from "react";

import { Container, Label } from "./styles";

function LabeledBox({ title, children, ...others }) {
  return (
    <Container {...others}>
      <Label>{title}</Label>
      {children}
    </Container>
  );
}

export default LabeledBox;
