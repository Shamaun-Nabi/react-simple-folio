import React from "react";
import Navbar from "./Navbar";
import styles from "../components/moduleCss/Home.module.css";
// import Typing from "react-typing-animation";
import Typewriter from "typewriter-effect";
// import styles from "../components/image/mainbg.jpg";

const Home = () => {
  const detailData = [
    {
      name: "Morocco",
      place: "Rabat - Casbalanca",
    },
    {
      name: "USA",
      place: "California - Detroit",
    },
    {
      name: "Canada",
      place: "Delta - Greenwood",
    },
  ];

  return (
    <div className={styles.mainBg}>
      <Navbar></Navbar>
      <div className={styles.Hero}>
        <div className="container sm:mt-0 md:mt-14 ">
          <div className="row ">
            <div className="col-12 ">
              <div>
                <h6 className="text-gray-100">- I am Shamaun Nabi</h6>
                {/* Type Script Area */}
                <div className={styles.typewriter}>
                  <Typewriter
                    options={{
                      strings: ["FREELANCER", "DEVELOPER", "DESIGNER"],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Location Area */}
          <div className="row mt-0 md-md-4">
            <div className="col-6">
              <div className="row">
                {detailData.map((detailData) => (
                  <div className="col-12 col-md-4 mt-0 mt-md-5 border-gray-100 border-l-2">
                    <h2 className="text-base text-gray-100">Morocco</h2>
                    <h2 className="text-base text-gray-400 ml-3">
                      Morocco - Rasa
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
