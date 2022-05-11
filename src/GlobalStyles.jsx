import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    Background: '#16161a',
    SubBackground: '#242629',
    Headline: '#fffffe',
    Paragraph: '	#94a1b2',
    Primary: '#7f5af0',
    Secondary: '#2cb67d',

  },
}
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
    color: white;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Zen Maru Gothic', 'Josefin Sans', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const PageTitle = styled.h1`
  font-size: 6rem;
`

export const Wrapper = styled.div`
  width: 100vw;
  /* height: calc(100vh - 60px); */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default GlobalStyle