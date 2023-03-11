import React from "react";
import Styles from "./Logement.module.scss";
import { useLocation } from "react-router-dom";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Title from "../../Components/LogementComponents/Title/Title";
import Tags from "../../Components/LogementComponents/Tags/Tags";
import Rates from "../../Components/LogementComponents/Rates/Rates";
import Host from "../../Components/LogementComponents/Host/Host";

const Logement = () => {
  const { property } = useLocation().state;
  console.log(property);

  return (
    <div className={Styles.logementContainer}>
      <Carrousel
        pictures={property.pictures}
        picturesLength={property.pictures.length}
      />
      <div className={Styles.firstContainer}>
        <Title title={property.title} location={property.location} />
        <Tags tags={property.tags} />
      </div>
      <div className={Styles.secondContainer}>
        <Rates />
        <Host />
      </div>
    </div>
  );
};

export default Logement;
