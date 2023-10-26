import React from "react";
import classes from "./portafolio.module.css";
export default function Portafolio() {
  return (
    <div className={classes.container}>
      <img src={"./images/portafolioImages/image-1.jpg"} alt="Slide3"></img>
      <h1> ☊ PORTAFOLIO</h1>
      <div className={classes.pcontainer}>
        <div className={classes.citologia}>
          <p>
            La citología es una prueba de diagnóstico médico que estudia células
            con el propósito de evidenciar o descartar malignidades en ellas. La
            citología vaginal, en particular, es una prueba de diagnóstico
            médico que estudia las células pertenecientes al cuello uterino. Se
            lleva a cabo mediante la toma endovercical y exocervical de muestras
            de células a través de un frote vaginal. Aunque de los diferentes
            tipos de citología, la ginecológica cérvico-vaginal es la más común,
            también hay otras como la citología de la boca y el tracto
            digestivo, la del aparato respiratorio (incluyendo esputo,
            cepillados y aspirados bronquiales), la de orina, la de líquido
            cefalorraquídeo y de derrames cavitarios ascíticos, la pleural, la
            del pericárdico, y la anal, entre otras. En todas, la intención es
            descartar la presencia de lesiones benignas o malignas.
          </p>
        </div>
        <div className={classes.pruebas}>
          <p>
            <ul>
              <li>Citología cervico-uterina convencional</li>
              <li>Citología cervico-uterina en fase líquida </li>
              <li>Citología cervico-uterina con fenotipificación con PCR</li>
              <li>Citología anal</li>
              <li>Citología de Masas por punción con aguja fina</li>
              <li>Citología de líquidos corporales</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
