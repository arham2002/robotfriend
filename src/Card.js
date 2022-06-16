import React from "react";
import styles from "./Card.module.css";

const Card = ({name, email, id} ) => {
  return (
    <div className={`${styles.container} ${styles.grow}`}>
      <img alt="photo" src={`https://robohash.org/${id}?200x200`} />
      <div className={styles.content}>
        <h2><center>{name}</center></h2>
        <center><p>{email}</p></center>
      </div>
    </div>
    

  );
}

export default Card;