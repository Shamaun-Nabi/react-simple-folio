import React from "react";
import Navbar from "./Navbar";
import styles from "../components/moduleCss/Home.module.css";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className={styles.mainBg}>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Home;
