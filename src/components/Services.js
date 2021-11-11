import React from "react";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const cardData = [
    {
      icon: "ri-dropbox-line text-5xl text-muted",
      Name: "Branding",
      Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi quasi et repellat quidem i veniam exercitationemsaepe, officia rerum eius!",
    },
    {
      icon: "ri-movie-line text-5xl text-muted",
      Name: "Movies",
      Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi quasi et repellat quidem i veniam exercitationemsaepe, officia rerum eius!",
    },
    {
      icon: "ri-store-2-line text-5xl text-muted",
      Name: "Marketing",
      Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi quasi et repellat quidem i veniam exercitationemsaepe, officia rerum eius!",
    },
  ];
  return (
    <>
      <div id="services">
        <SectionTitle title="Services" />
        <div className="container">
          <div className="row">
            {cardData.map((cardData) => (
              <div className="col-md-4 mt-2">
                <div className="border border-gray-700 p-3">
                  <i className={cardData.icon}></i>
                  <h4>{cardData.Name}</h4>
                  <p className="text-muted">{cardData.Desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
