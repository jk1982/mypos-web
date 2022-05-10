import styled from "@emotion/styled";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
