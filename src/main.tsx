import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './pages/Navbar'
import Background from './pages/Background'
import Splash from './pages/Splash';
import Header from './pages/Header';

AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Splash/> */}
    <Background>
    <Navbar/>
    <Header/>
    </Background>
  </StrictMode>,
)
