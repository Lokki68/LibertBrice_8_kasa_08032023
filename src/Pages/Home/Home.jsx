import React from "react";
import Styles from "./Home.module.scss";
import Properties from "../../Data/logements.json";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {
  console.log(Properties);

  return (
    <div>
      <Banner />
      {Properties ? (
        <Gallery properties={Properties} />
      ) : (
        <div>Chargement ...</div>
      )}
    </div>
  );
};

export default Home;
