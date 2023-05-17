import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nitish Kumar</h1>
        <span className="home__education">I am a software Engineer.</span>

        <HeaderSocial />

        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown/>
      </div>
    </section>
  );
}
