import React from "react";
import "./App.css";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
function Home() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Feature />
      
    </>
  );
}
export default Home;
