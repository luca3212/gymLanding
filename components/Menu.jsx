import React from "react";
import styles from "../styles/menu.module.scss";

import LogoFull from "./logoFull";

export default function Menu() {
  return (
    <div className={styles.containMenu}>
      <div className={styles.centerMenu}>
        <div>
          <LogoFull />
        </div>
        <div className={styles.infoMenu}>
          <p>WhatsApp: 11-65457823</p>
        </div>
      </div>
    </div>
  );
}
