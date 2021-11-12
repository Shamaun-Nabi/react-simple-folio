import React from "react";
import styles from "../components/moduleCss/About.module.css";
import SectionTitle from "./SectionTitle";

export default function About() {
  const progressStyle = {
    width: "50%",
  };
  const progressData = [
    {
      name: "java",
      width: "25%",
    },
    {
      name: "Javascript",
      width: "30%",
    },
    {
      name: "React",
      width: "70%",
    },
  ];
  return (
    <>
      <div className="container" id="about">
        <SectionTitle title="About Me" />
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mt-3 ">
            <div className="border-2 border-gray-200 p-4">
              <img
                className={styles.leftPic}
                src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="leftPic"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mt-14">Hello, Im Razan Taylor</h3>
            <p className="text-gray-400 mt-4">
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is. The
              European languages are members of the same family.English person,
            </p>
            {progressData.map((progressData) => (
              <div>
                <p>{progressData.name}</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar "
                    style={progressStyle}
                    aria-valuenow="50"
                    aria-valuemin="10"
                    aria-valuemax="100"
                  >
                    {progressData.width}
                  </div>
                </div>
              </div>
            ))}
            <button className=" border-2 p-2 hover:border-red-400 transition ease-in delay-200 shadow-md rounded-md">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
