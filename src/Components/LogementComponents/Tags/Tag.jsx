import React from "react";
import Styles from "./Tag.module.scss";

const Tag = ({ tag }) => {
  return <div className={Styles.tagContainer}>{tag}</div>;
};

export default Tag;
