import React from "react";
import styles from "../../styles/planes.module.scss";

export default function Planes() {
  return (
    <div className={styles.containPlanes}>
      <div className={styles.titleSeccion}>
        <h1>PLANES</h1>
      </div>
      <div className={styles.containCards}>
        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>PASE</h2>
          </div>
          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Día
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>GRATIS</h2>
            <button>Seleccionar Plan</button>
          </div>
        </div>

        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>PASE</h2>
          </div>
          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Mes
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>$ 3000</h2>
            <button>Seleccionar Plan</button>
          </div>
        </div>

        <div className={styles.planes}>
          <div className={styles.titlePase}>
            <h2>PASE</h2>
          </div>
          <div className={styles.infoPlan}>
            <h2>
              <strong>1</strong> Semana
            </h2>
          </div>

          <div className={styles.buttonPlan}>
            <h2>$ 1000</h2>
            <button>Seleccionar Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
