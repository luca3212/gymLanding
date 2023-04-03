import React from "react";
import styles from "../styles/spinner.module.scss";

import LogoFull from "./logoFull";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <LogoFull />
    </div>
  );
}
