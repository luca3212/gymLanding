import React from "react";
import styles from "../styles/spinner.module.scss";
import logo from "../public/imgGym/logo.png";
import Image from "next/image";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <Image src={logo} priority alt="logo" />
    </div>
  );
}
