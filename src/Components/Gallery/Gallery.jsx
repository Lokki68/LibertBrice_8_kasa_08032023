import React from "react";
import Card from "./Card";
import Styles from "./Gallery.module.scss";

const Gallery = ({ properties }) => {
  return (
    <div className={Styles.galleryContainer}>
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Gallery;
