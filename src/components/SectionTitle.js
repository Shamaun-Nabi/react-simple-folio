import React from "react";
import styles from "../components/moduleCss/SectionTitle.module.css";

export default function SectionTitle(props) {
  return (
    <div className="container mt-4">
      <h3 className="mt-3 ">{props.title}</h3>
      <hr className={styles.line} />
    </div>
  );
}
