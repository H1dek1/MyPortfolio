import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from 'styled-components';
import { Navbar, Footer } from "./components/";
import GlobalStyle, { theme } from './GlobalStyles'
import { Home, Personality, Skills, Contact, NotFound } from './pages'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar /> 
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Personality' element={<Personality />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
