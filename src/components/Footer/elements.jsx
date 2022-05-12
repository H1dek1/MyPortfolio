import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";

export const FooterWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.Background};
  color: ${({ theme }) => theme.colors.Paragraph};
  height: ${({ theme }) => theme.heights.Footer};
`
export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextArea = styled.div`
  text-align: center;
`