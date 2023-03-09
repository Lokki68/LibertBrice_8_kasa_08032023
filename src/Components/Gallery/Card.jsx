import React from "react";
import Styles from "./Card.module.scss";

const Card = ({ property }) => {
  console.log(property);
  const { title, cover } = property;

  return (
    <div className={Styles.cardContainer}>
      <h3>{title}</h3>
      <div className={Styles.cardPicture}>
        <img src={cover} alt={title} />
      </div>
    </div>
  );
};

export default Card;
