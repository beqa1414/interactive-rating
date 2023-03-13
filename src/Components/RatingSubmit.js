import React from "react";
import styles from "../Components/RatingSubmit.module.css";

const RatingSubmit = ({ selectedNum, title, text, img_mobile }) => {
  return (
    <div className={styles.submitted}>
      <div className={styles.img_icon}>
        <img src={img_mobile} />
      </div>
      <div className={styles.selected}>You selected {selectedNum} out of 5</div>
      <h1 className={styles.thanks}>{title}</h1>
      <p className={styles.text}> {text} </p>
    </div>
  );
};

export default RatingSubmit;
