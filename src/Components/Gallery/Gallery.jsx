import React from "react";
import Card from "./Card";
import Styles from "./Gallery.module.scss";
import { Link } from "react-router-dom";


const Gallery = ({ properties }) => {
  return (
    <div className={Styles.galleryContainer}>
      {properties.map((property) => (
        <Link
          key={property.id}
          to={`/logement/${property.id}`}
          state={{ property }}
        >
          <Card property={property} />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
