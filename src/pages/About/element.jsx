import styled from "styled-components";
import { PageTitle, PageWrapper } from "../../GlobalStyles";

export const Wrapper = styled(PageWrapper)`
background-image: url(${props => props.bgImg});
`
export const Title = styled(PageTitle)`
  color: #fff;
  `