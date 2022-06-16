import React from "react";
import styles from "./Searchfield.module.css";

const Searchfield = ({searchchange}) => {
  return (
    <div className={styles.whole}>
      <center><input type="search" 
      placeholder="search robots"
      className={styles.box}
      onChange={searchchange} /></center>
    </div>
  )
}

export default Searchfield;