import React from "react";
import About from "../About";
import Furniture from "../Furniture";
import Servise from "../Servise";
import styled from "styled-components";
import Karusel from "../Karusel";
import Footer from "../Footer";

const Body = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
  `;
  return (
    <Wrapper>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Servise />
      </div>
      <div id="search">
        <Furniture />
      </div>
      <div id="korusel">
        <Karusel/>
      </div>
      <div>
        <Footer/>
      </div>
    </Wrapper>
  );
};

export default Body;
