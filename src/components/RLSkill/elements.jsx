import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";
import { implementations } from './data'
import { customMedia } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  /* border: solid yellow; */
  background-color: ${({ theme }) => theme.colors.SubBackground};
  width: 100%;
  padding: 80px 0;
  min-height: calc(100vh - ${({ theme }) => theme.heights.Header});
  display: block;
`
export const TopContainer = styled(Container)`
  padding: 50px 0;
  /* height: calc(100vh - ${({ theme }) => theme.heights.Header}); */
  display: flex;
  justify-content: center;
  align-items: center;

  ${customMedia.lessThan('large')`
    padding: 50px 20px;
    flex-direction: column;
  `
  }
`
export const TopMessage = styled.h2`
  display: block;
  /* border: solid yellow; */
  margin-right: 100px;
  color: ${({ theme }) => theme.colors.Headline};
  height: fit-content;
  font-size: 1.8rem;
  line-height: 2.5rem;
  span {
    color: ${({ theme }) => theme.colors.Primary};
  }

  ${customMedia.lessThan('large')`
    margin-right: 0;
    font-size: 1.2rem;
    line-height: 1.8rem;
  `
  }
`
export const SampleVideos = styled.div`
  /* border: solid yellow; */

  ${customMedia.lessThan('large')`
    margin-top: 20px;
  `
  }
`
export const StyledVideo = styled.video`
  /* border: solid yellow; */
  margin: 0;
  width: 300px;

  ${customMedia.lessThan('large')`
    max-width: 90vw;
  `
  }
`
export const VideoDescription = styled.div`
  /* border: solid yellow; */
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Arrow = styled.div`
  display: block;
  width: 0;
  margin-top: 5px;
  border-style: solid;
  border-width: 24px 14px 0 14px;
  border-color: ${({ theme }) => theme.colors.Paragraph} transparent transparent transparent;
`

export const Methods = styled(Container)`
  margin-top: 100px;

`
export const Title = styled.h3`
  /* border: solid yellow; */
  display: block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.Paragraph};
  margin-bottom: 20px;
`
export const MethodContent = styled.div`
overflow: hidden;
`
export const Method = styled.div`
  float: left;
  padding: 10px;
  margin: 5px 10px;
  border-radius: 8px;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.Background};
`

export const Implementation = styled(Container)`
  margin-top: 100px;
`
export const ImplementationContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const ImplementationItem = styled.div`
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
export const ItemIcon = styled.div`
  display: block;
  font-size: 5rem;
  margin-bottom: 5px;
`
export const items = implementations.map((item) => {
  return {
    icon: ItemIcon.withComponent(item.icon),
    name: item.name,
  }
})