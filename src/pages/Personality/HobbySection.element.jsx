import styled from "styled-components";
import { Wrapper } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - 60px);
  background-color: ${({ isOdd, theme }) => (isOdd ? theme.colors.SubBackground : theme.colors.Background)}
`
