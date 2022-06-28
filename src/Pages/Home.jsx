import React from "react";
import Hero from "../components/Hero/Hero";
import Logo from "../Assets/typedu.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero
        title="The Diary"
        subtitle="“I can shake off everything as I write; my sorrows disappear, my courage is reborn” – Anne Frank"
      />
      <div className="image">
        <img src={Logo} alt="logo" />
      </div>
    </>
  );
};

export default Home;
