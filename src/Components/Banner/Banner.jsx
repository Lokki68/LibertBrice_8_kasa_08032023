import React from "react";
import Styles from "./Banner.module.scss";
import homePicture from "../../Assets/homepicture.png";

const Banner = () => {
  return (
    <div className={Styles.bannerContainer}>
      <h2>Chez vous, </h2>
      <h2> partout et ailleurs</h2>
      <div className={Styles.imageContainer}>
        <img src={homePicture} alt="Banner" loading="lazy" />
      </div>
    </div>
  );
};

export default Banner;
