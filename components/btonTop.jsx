import React from "react";
import styles from "../styles/btonTop.module.scss";
import Chevron from "./chevron";

import { useState, useEffect } from "react";

export default function BtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.top} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Chevron />
    </button>
  );
}
