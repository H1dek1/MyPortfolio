import styled from "styled-components";
import { PageTitle, PageWrapper } from "../../GlobalStyles";

export const Wrapper = styled(PageWrapper)`
background-image: url(${props => props.bgImg});
background-repeat: no-repeat;
background-size: cover;
`
export const Title = styled(PageTitle)`
  color: #fff;
  `