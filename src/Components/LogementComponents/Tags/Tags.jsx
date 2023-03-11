import React from "react";
import Tag from "./Tag";

import Styles from "./Tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={Styles.tagsContainer}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
