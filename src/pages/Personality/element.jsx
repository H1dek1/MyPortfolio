import styled from "styled-components";
import { PageTitle, Wrapper } from "../../GlobalStyles";

export const AboutWrapper = styled(Wrapper)`
  background-color: ${({theme}) => theme.colors.Background};
  width: 100%;
  height: calc(100vh - 60px);
  padding: 160px;
`
export const Title = styled(PageTitle)`
  color: ${({theme}) => theme.colors.Headline};
  `