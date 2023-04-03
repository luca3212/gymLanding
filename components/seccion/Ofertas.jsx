import React from "react";
import styles from "../../styles/ofertas.module.scss";

export default function Ofertas() {
  return (
    <div className={styles.containOfertas}>
      <div className={styles.titleSeccion}>
        <h1>
          NUESTROS <strong>PROGRAMAS</strong>
        </h1>
      </div>

      <div className={styles.containCards}>
        <div className={styles.cardOfertas}>
          <div className={styles.infoOferta}>
            <h2>YOGA</h2>
            <p>
              El yoga combina técnicas de meditación, respiración y posturas
              corporales para mejorar la salud y el bienestar de cuerpo y mente.
              A través de la práctica regular del yoga, se pueden experimentar
              beneficios como la reducción del estrés, la mejora de la
              flexibilidad y la fuerza muscular, y la conexión con el yo
              interior. El yoga es una herramienta valiosa para lograr tus
              objetivos de salud y bienestar.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/yoga.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertasAlternativa}>
          <div className={styles.infoOferta}>
            <h2>CARDIO</h2>
            <p>
              El cardio es un ejercicio que aumenta la frecuencia cardíaca y la
              respiración para mejorar la salud del corazón y los pulmones. A
              través de ejercicios como correr, caminar, andar en bicicleta y
              nadar, el cardio mejora la resistencia y la fuerza cardiovascular,
              previniendo enfermedades y mejorando la salud general.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/cardio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertas}>
          <div className={styles.infoOferta}>
            <h2>MUSCULACION</h2>
            <p>
              La musculación es un tipo de entrenamiento que se centra en el
              desarrollo y fortalecimiento de los músculos del cuerpo. A través
              del uso de pesas y otros equipos de entrenamiento de resistencia,
              la musculación ayuda a aumentar la masa muscular, mejorar la
              fuerza y la resistencia física, y prevenir lesiones. La
              musculación es una forma efectiva de mejorar la salud y la forma
              física en general.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/fuerza.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertasAlternativa}>
          <div className={styles.infoOferta}>
            <h2>BOXEO</h2>
            <p>
              El boxeo es un deporte que combina técnicas de lucha con golpes de
              puño para mejorar la forma física y la coordinación. A través del
              entrenamiento en técnicas de boxeo, se pueden mejorar la
              resistencia cardiovascular, la fuerza muscular y la capacidad de
              reacción. El boxeo es una forma efectiva de ejercicio y también
              puede ayudar a mejorar la confianza en uno mismo y la autoestima.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/boxeo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
