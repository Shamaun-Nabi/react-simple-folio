import React from "react";
import Navbar from "./Navbar";
import styles from "../components/moduleCss/Home.module.css";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className={styles.mainBg}>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <About />
    </>
  );
};

export default Home;
