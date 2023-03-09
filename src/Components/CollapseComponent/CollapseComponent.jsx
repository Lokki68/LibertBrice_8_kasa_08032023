import React, { useState } from "react";
import Styles from "./CollapseComponent.module.scss";

const CollapseComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={Styles.collapseContainer}>
      <div className={Styles.collapseBar} onClick={toggleCollapse}>
        <p>{title}</p>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      <div
        className={`${Styles.collapseContent} ${
          !isOpen ? Styles.collapse : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default CollapseComponent;
