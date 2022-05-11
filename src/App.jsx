import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from 'styled-components';
import { Navbar } from "./components/";
import GlobalStyle, { theme } from './GlobalStyles'
import { Home, Personality, Skills, Contact, NotFound } from './pages'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Navbar /> 
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Personality' element={<Personality />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
