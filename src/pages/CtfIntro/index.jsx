import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./ctfIntro.module.css";

const CtfIntro = () => {
  return (
    <main>
      <h1>Hei!</h1>
      <p>Hva er neste aksjonspunkt i aksjonsplanen?</p>
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
        Husker du Hackerman fra Kung Fury (2015)? Jeg er han
      </Link>
    </main>
  );
};

export default CtfIntro;
