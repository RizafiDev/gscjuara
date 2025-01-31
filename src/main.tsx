import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "remixicon/fonts/remixicon.css";
import Navbar from "./pages/Navbar";
import Background from "./pages/Background";
import Splash from "./pages/Splash";
import Header from "./pages/Header";
import Card from "./pages/Card";
import About from "./pages/About";
import Map from "./pages/Map";
import Navchild from "./pages/Navchild";
import Rating from "./pages/Rating";
import Musim from "./pages/Musim";
import Faq from "./pages/Faq";
import Question from "./pages/Question";
import Footer from "./pages/Footer";

AOS.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Splash /> */}
    <Background>
      <Navbar />
      {/* <Navchild /> */}
      <Header />
      <Card />
      <About />
      <Map />
      <Musim />
      <Rating />
      <Faq />
      <Question />
      <Footer />
    </Background>
  </StrictMode>
);
