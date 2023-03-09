import React from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../../Components/Carrousel/Carrousel";

const Logement = () => {
  const { property } = useLocation().state;
  console.log(property);

  return (
    <div>
      <Carrousel
        pictures={property.pictures}
        picturesLength={property.pictures.length}
      />
    </div>
  );
};

export default Logement;
