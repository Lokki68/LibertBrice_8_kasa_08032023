import React from "react";
import Styles from "./About.module.scss";
import CollapseComponent from "../../Components/CollapseComponent/CollapseComponent";
import { aboutData } from "../../Data/AboutData";
import aboutPicture from "../../Assets/apropospicture.png";

const About = () => {
  return (
    <div>
      <div className={Styles.pictureContainer}>
        <img src={aboutPicture} alt="About Banner" loading="lazy" />
      </div>

      {aboutData.map((data, index) => (
        <CollapseComponent
          key={index}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
};

export default About;
