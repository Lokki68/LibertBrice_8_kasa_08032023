import React from "react";
import Styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={Styles.notFound}>
      <div className={Styles.content}>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default NotFound;
