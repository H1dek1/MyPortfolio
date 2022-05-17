import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
} from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'

export const SectionWrapper = styled(Wrapper)`
  /* border: solid yellow; */
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 80px 0;
  min-height: calc(100vh - ${({ theme }) => theme.heights.Header});
  display: block;
`
export const TopContainer = styled(Container)`
  /* border: solid purple; */
  &:first-child {
    margin-bottom: 80px;
  }
`
export const SkillGrid = styled.div`
  /* border: solid yellow; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Skill = styled.div`
  /* border: solid yellow; */
  width: 33%;
  max-width: 200px;
  min-width: 150px;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.Headline};
`
export const SkillIcon = styled.div`
  display: block;
  /* border: solid yellow; */
  font-size: 5rem;
  margin-bottom: 5px;
`
export const skills = [
  {
    icon: SkillIcon.withComponent(DiHtml5),
    name: 'HTML 5',
  },
  {
    icon: SkillIcon.withComponent(DiCss3),
    name: 'CSS 3',
  },
  {
    icon: SkillIcon.withComponent(DiJavascript),
    name: 'Javascript',
  },
  {
    icon: SkillIcon.withComponent(DiReact),
    name: 'React',
  },
  {
    icon: SkillIcon.withComponent(SiFirebase),
    name: 'Firebase',
  },
]
export const Description = styled.div`
`
export const WorkList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`