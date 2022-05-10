import styled from "styled-components";
import { PageTitle, PageWrapper } from "../../GlobalStyles";
import { GiSloth } from 'react-icons/gi'

export const Wrapper = styled(PageWrapper)`
background-image: url(${props => props.bgImg});
background-repeat: no-repeat;
background-size: cover;
padding: 160px 0;
`
export const MainIcon = styled.div`
  color: #fff;
  font-size: 20rem;
  border: solid black 2px;
`
export const IconText = styled(GiSloth)`
  display: block;
  border: solid black 2px;
`
export const Profile = styled.div`
  border: solid black 2px;
`
export const Title = styled.div`
  border: solid black 2px;
`
export const NameArea = styled.h1`
  border: solid black 2px;
`
export const Picture = styled.div`
  border: solid black 2px;
`
export const Description = styled.div`
  border: solid black 2px;
`
