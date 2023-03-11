import React, { useState } from "react";
import Styles from "./Carrousel.module.scss";

const Carrousel = ({ pictures, picturesLength }) => {
  const [carrouselIndex, setCarrouselIndex] = useState(0);

  const handleNextPicture = () => {
    if (carrouselIndex < picturesLength - 1) {
      setCarrouselIndex(carrouselIndex + 1);
    } else {
      setCarrouselIndex(0);
    }
  };

  // console.table(pictures);
  const handlePreviousPicture = () => {
    if (carrouselIndex > 0) {
      setCarrouselIndex(carrouselIndex - 1);
    } else {
      setCarrouselIndex(picturesLength - 1);
    }
  };

  return (
    <div className={Styles.carrouselContainer}>
      {picturesLength > 1 && (
        <>
          <i
            onClick={handlePreviousPicture}
            className="fa-solid fa-chevron-left"
          ></i>
          <i
            onClick={handleNextPicture}
            className="fa-solid fa-chevron-right"
          ></i>
        </>
      )}

      <div className={Styles.carrouselPicture}>
        <img
          src={pictures[carrouselIndex]}
          alt={`logement ${carrouselIndex}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Carrousel;
