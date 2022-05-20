import styled from "styled-components";
import { Wrapper } from "../../GlobalStyles";

export const NotFoundWrapper = styled(Wrapper)`
background-image: url(${props => props.bgImg});
background-repeat: no-repeat;
background-size: cover;
`
export const Title = styled.h1`
  color: #fff;
  `