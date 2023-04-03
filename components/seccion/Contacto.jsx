import React from "react";
import styles from "../../styles/contacto.module.scss";
import Link from "next/link";
import LogoFull from "../logoFull";

export default function Contacto() {
  return (
    <div className={styles.containContacto}>
      <div className={styles.containMapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22337.144420865658!2d-65.4630018569037!3d-33.67176298687444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1680216398518!5m2!1ses!2sar"
          style={{ border: "none" }}
          className={styles.mapa}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.containInfo}>
          <h2>Informacion</h2>

          <h3>Ubicacion</h3>
          <p>Avenida 25 de mayo 1850, Villa Mercedes, San Luis.</p>

          <h3>Telefono</h3>
          <p>11-65457823</p>

          <h3>Email</h3>
          <p>TriforceClub@gmail.com</p>
        </div>
      </div>

      <div className={styles.containData}>
        <div className={styles.containCopy}>
          <LogoFull />
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
            />
            <button>Suscribir</button>
          </div>
          <p>
            Copyright © 2023 <br />
            Hecho por{" "}
            <Link
              href="https://agueroluca.com.ar/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Agüero Luca
            </Link>
          </p>
        </div>
        <div className={styles.containClases}>
          <h2>Nuestras Clases</h2>
          <ul>
            <li>
              <a>Yoga</a>
            </li>
            <li>
              <a>Cardio</a>
            </li>
            <li>
              <a>Musculacion</a>
            </li>
            <li>
              <a>Boxeo</a>
            </li>
          </ul>
        </div>
        <div className={styles.containHorarios}>
          <h2>Horarios</h2>
          <ul>
            <li>
              <p>
                <strong> Lunes - Viernes</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> 8:00 a 22:00</p>
            </li>
            <li>
              <p>
                <strong> Sabado</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> 9:00 a 20:00</p>
            </li>
            <li>
              <p>
                <strong> Domingo</strong>
              </p>
            </li>
            <li className={styles.info}>
              <p> Cerrado</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
