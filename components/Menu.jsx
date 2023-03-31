import Image from "next/image";
import React from "react";

import logo from "../public/imgGym/logo.png";
import styles from "../styles/menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.containMenu}>
      <div className={styles.centerMenu}>
        <div>
          <Image src={logo} height={35} width={216} priority alt="logo" />
        </div>
        <div className={styles.infoMenu}>
          <p>WhatsApp: 11-65457823</p>
        </div>
      </div>
    </div>
  );
}
