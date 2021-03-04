import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./ctfIntro.module.css";

const info = [
  "Det er jammen mye rart man kan skule i en hvit bakgrunn!",
  "Send flaggene dine til konkurranser@abakus.no",
  "https://s.ntnu.no/flag",
  "Visste du at det bare er 0.1% sjanse for at denne teksten vises?",
];

const CtfIntro = () => {
  return (
    <main>
      <h1>Hei!</h1>
      <p>{info[Math.floor(Math.random() * info.length)]}</p>
      <br />
      <Link to={"/curious-image"} className={styles.primary}>
        Vis meg et spennende bilde
      </Link>
      <br />
      <Link to={"/bingo"} className={styles.secondary}>
        La meg spille bingo!
      </Link>{" "}
      <br />
      <Link to={"/hackerman"} className={styles.tertiary}>
        TEST
      </Link>
    </main>
  );
};

export default CtfIntro;
