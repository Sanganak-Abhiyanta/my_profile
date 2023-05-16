import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nitish Kumar</h1>
        <span className="home__education">I am a software Engineer.</span>
      </div>
    </section>
  );
}
