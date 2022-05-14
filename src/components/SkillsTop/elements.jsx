import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  /* border: solid yellow; */
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - ${({ theme }) => theme.heights.Header});
`
export const TopContainer = styled(Container)`
  /* border: solid yellow; */
`
export const SkillsList = styled.ul`
  /* border: solid yellow; */
  list-style: none;
  display: flex;
  justify-content: space-around;
`
export const SkillItem = styled.li`
  border: solid ${({ theme }) => theme.colors.Paragraph} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 35vw; */
  /* height: 35vw; */
  width: 400px;
  height: 400px;
  padding: 70px;
  border-radius: 15%;
  color: ${({ theme }) => theme.colors.Paragraph};
  &:hover {
    transition: ease-in-out 0.5s;
    border-color: ${({ theme }) => theme.colors.Primary};
    color: ${({ theme }) => theme.colors.Primary};
  }
`
export const SkillLink = styled.div`
  /* border: solid yellow; */
  text-align: center;
  height: fit-content;
  font-size: 3rem;
  /* color: ${({ theme }) => theme.colors.Paragraph}; */
  color: inherit;
`