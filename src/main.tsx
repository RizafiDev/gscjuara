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
import NavItem from "./pages/NavItem";

AOS.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Splash/> */}
    <Background>
      <Navbar />
      <Header />
      <Card />
      <NavItem />
    </Background>
  </StrictMode>
);
