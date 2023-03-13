import React from "react";
import styles from "./Rating.module.css";

function Rating({ selectedNum, selectNum, handleSubmit, title, text, star }) {
  return (
    <div className="card" style={mainCard.card}>
      <div className={styles.oval}>
        <div className={styles.star_icon}>
          <img src={star} alt="start_icon" />
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.text}>{text}</p>
      <div className={styles.numbers}>
        <span
          className={`${styles.num_ovals}  ${
            selectedNum === "1" && styles.num_active
          }`}
          onClick={selectNum}
        >
          1
        </span>
        <span
          className={`${styles.num_ovals}  ${
            selectedNum === "2" && styles.num_active
          }`}
          onClick={selectNum}
        >
          2
        </span>
        <span
          className={`${styles.num_ovals}  ${
            selectedNum === "3" && styles.num_active
          }`}
          onClick={selectNum}
        >
          3
        </span>
        <span
          className={`${styles.num_ovals}  ${
            selectedNum === "4" && styles.num_active
          }`}
          onClick={selectNum}
        >
          4
        </span>
        <span
          className={`${styles.num_ovals}  ${
            selectedNum === "5" && styles.num_active
          }`}
          onClick={selectNum}
        >
          5
        </span>
      </div>
      <button className={styles.submit} onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

const mainCard = {
  card: {
    width: "412px",
    height: "416px",
    background:
      "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
    borderRadius: "30px",
    padding: "40px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Rating;
