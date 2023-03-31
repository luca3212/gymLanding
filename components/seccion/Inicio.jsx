import React from "react";
import styles from "../../styles/inicio.module.scss";

import Image from "next/image";
import fondo from "../../public/imgGym/inicio.jpg";

export default function Inicio() {
  return (
    <div className={styles.containInicio}>
      <div className={styles.containText}>
        <h1>
          TRANSFORMA <br /> <strong>TU CUERPO</strong>
        </h1>
        <p>
          Nuestro equipo de entrenadores altamente capacitados te ayudará a
          transformar tu cuerpo y alcanzar tus metas de fitness, para que puedas
          sentirte y verte mejor que nunca.
        </p>
        <button>Empezar</button>
      </div>

      <div className={styles.fondoInicio}>
        <Image src={fondo} priority alt="fondo inicio" />
      </div>
    </div>
  );
}
