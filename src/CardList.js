import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";

const CardList = ({robots}) => {
  return (
    <div className={styles.container}>
    {
      robots.map((user, i) => {
        return <Card key={user.id} id={user.id} name={user  .name} email={user.email} />
      })
    }
    </div>
  );
}

export default CardList;