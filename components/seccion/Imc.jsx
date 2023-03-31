import React, { useState } from "react";
import styles from "../../styles/imc.module.scss";

import Image from "next/image";
import fotofondo from "../../public/imgGym/imc.jpg";

import { useRef } from "react";
export default function Imc() {
  const inputPeso = useRef(null);
  const inputAltura = useRef(null);

  const [calculo, setCalculo] = useState({
    imc: "--",
    pesoCalculo: "--",
  });

  const [data, setData] = useState({
    peso: "",
    altura: "",
  });

  function controlInputs(valor) {
    return valor.length != 0 && valor > 0;
  }

  function handleClick(e) {
    e.preventDefault();
    //console.log(controlInputs(data.peso));
    if (controlInputs(data.peso) && controlInputs(data.altura)) {
      const rdoIMC = (data.peso / Math.pow(data.altura, 2)).toFixed(2);

      if (rdoIMC < 18.5) {
        setCalculo({
          imc: rdoIMC,
          pesoCalculo: "Bajo Peso",
        });
      } else {
        if (rdoIMC < 24.9) {
          setCalculo({
            imc: rdoIMC,
            pesoCalculo: "Peso Normal",
          });
        } else {
          if (rdoIMC < 29.9) {
            setCalculo({
              imc: rdoIMC,
              pesoCalculo: "Sobrepeso",
            });
          } else {
            setCalculo({
              imc: rdoIMC,
              pesoCalculo: "Obesidad",
            });
          }
        }
      }
    } else {
      if (controlInputs(data.peso)) {
        inputAltura.current.focus();
      } else {
        inputPeso.current.focus();
      }

      setCalculo({
        imc: "--",
        pesoCalculo: "--",
      });
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <div className={styles.containImc}>
      <div className={styles.deco}>
        <Image
          src={fotofondo}
          width={1920}
          height={1280}
          quality={100}
          alt="foto decoracion"
        />
      </div>

      <div className={styles.titleSeccion}>
        <h2>
          Calculadora de <strong>IMC</strong>
        </h2>
      </div>

      <div className={styles.containCalculo}>
        <span className={styles.containForm}>
          <label htmlFor="peso">Peso: (Kg)</label>
          <input
            type="number"
            id="peso"
            name="peso"
            ref={inputPeso}
            onChange={handleChange}
          />
        </span>

        <span className={styles.containForm}>
          <label htmlFor="altura">Altura: (Mts)</label>
          <input
            type="number"
            id="altura"
            name="altura"
            ref={inputAltura}
            onChange={handleChange}
          />
        </span>

        <span className={styles.containBotton}>
          <button onClick={handleClick}>Calcular</button>
        </span>
      </div>

      <div className={styles.resultadoIMC}>
        <span>
          <p>
            Su IMC es: <strong>{calculo.imc}</strong>
          </p>
        </span>

        <span>
          <p>
            Su peso es: <strong>{calculo.pesoCalculo}</strong>
          </p>
        </span>
      </div>
    </div>
  );
}
