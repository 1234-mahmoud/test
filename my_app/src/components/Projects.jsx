import React from "react";
import "../styles/Projets.css";
import data from "../data/Data";
export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        {data.map((i, idx) => (
          <div className="project" key={idx}>
       <div className="proj_img">
       <img src={i.img} alt="Picture" />
       </div>
        <div className="proj_info">
        <span>{i.name}</span>
        <p>{i.description}</p>
        <a href={i.link}>Sourse Code</a>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}
