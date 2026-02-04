import React from "react";
// import "./Button.css";
import styles from "./button.module.css";
export default function Button() {
  return <button className={styles.btn} style={{background:"red",color:"black"}}>Button</button>;
}
