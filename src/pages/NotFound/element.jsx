import styled from "styled-components";
import { Wrapper } from "../../GlobalStyles";

export const NotFoundWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.Background};
  height: calc(100vh - ${({ theme }) => theme.heights.Header} - ${({ theme }) => theme.heights.Footer});
`
export const Title = styled.h1`
  color: #fff;
  `