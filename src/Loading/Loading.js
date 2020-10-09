import React from "react";
import styles from "./Loading.module.css";

export function Loading() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
        <div className={styles.fourth}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
        <div className={styles.fourth}></div>
      </div>
    </React.Fragment>
  );
}
