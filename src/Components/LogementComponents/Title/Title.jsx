import React from "react";
import Styles from "./Title.module.scss";

const Title = ({ title, location }) => {
  return (
    <div className={Styles.titleContainer}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
};

export default Title;
