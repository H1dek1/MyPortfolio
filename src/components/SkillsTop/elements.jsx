import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  /* border: solid yellow; */
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - ${({ theme }) => theme.heights.Header});

  ${customMedia.lessThan('large')`
    padding: 80px 0;
    `
  }
`
export const TopContainer = styled(Container)`
  /* border: solid yellow; */
`
export const SkillsList = styled.ul`
  /* border: solid yellow; */
  list-style: none;
  display: flex;
  justify-content: space-around;

  ${customMedia.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `
  }
`
export const SkillItem = styled.li`
  border: solid ${({ theme }) => theme.colors.Paragraph} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
  padding: 70px;
  border-radius: 15%;
  color: ${({ theme }) => theme.colors.Paragraph};
  &:hover {
    transition: ease-in-out 0.5s;
    border-color: ${({ theme }) => theme.colors.Primary};
    color: ${({ theme }) => theme.colors.Primary};
  }

  ${customMedia.lessThan('large')`
    width: 35vh;
    height: 35vh;
    margin: 20px;
    `
  }
`
export const SkillLink = styled.div`
  /* border: solid yellow; */
  text-align: center;
  height: fit-content;
  font-size: 3rem;
  /* color: ${({ theme }) => theme.colors.Paragraph}; */
  color: inherit;

  ${customMedia.lessThan('large')`
      font-size: 1.2rem;
    `
  }
`