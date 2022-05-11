import styled from "styled-components";
import { PageTitle, Wrapper } from "../../GlobalStyles";

export const SkillsWrapper = styled(Wrapper)`
background-image: url(${props => props.bgImg});
background-repeat: no-repeat;
background-size: cover;
`
export const Title = styled(PageTitle)`
  color: #fff;
  `