import React from "react";
import styles from "./cat-container.module.css";

export default function CatContainer({
  name,
  slug,
  image,
  description,
  owner,
}) {
  return (
    <div className={styles.catContainer}>
      <img src={image} alt={name} className={styles.catImage} />
      <div className={styles.catDetails}>
        <h2 className={styles.catName}>{name}</h2>
        <p className={styles.catOwner}>Owner: {owner}</p>
        <p className={styles.catDescription}>{description}</p>
      </div>
    </div>
  );
}
