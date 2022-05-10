import { Navbar } from "./components/";
import { GlobalStyle } from './GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import { Home, About, Skills, Contact, NotFound } from './pages'

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar /> 
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
