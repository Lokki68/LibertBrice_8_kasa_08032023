import React from "react";
import Styles from "./Card.module.scss";

const Card = ({ property }) => {
  const { title, cover } = property;

  return (
    <div className={Styles.cardContainer}>
      <h3>{title}</h3>
      <div className={Styles.cardPicture}>
        <img src={cover} alt={title} loading="lazy" />
      </div>
    </div>
  );
};

export default Card;
