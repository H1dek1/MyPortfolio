import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  border: solid yellow;
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - ${({ theme }) => theme.heights.Header});
`
export const TopContainer = styled(Container)`
  border: solid yellow;
`