import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./ctfIntro.module.css";

const info = [
  "Det er jammen mye rart man kan skule i en hvit bakgrunn!",
  "Send flaggene dine til konkurranse[at]abakus.no",
  "https://s.ntnu.no/flag",
  "Visste du at det bare er 0.1% sjanse for at denne teksten vises?",
  "Visste du at et av verdens mest usikre passord ble funnet hele 2485216 ganger i lekkede passordlister?",
];

const CtfIntro = () => {
  const [currentPassword, setCurrentPassword] = useState(
    JSON.parse(localStorage.getItem("password"))
  );
  const [loginMessage, setLoginMessage] = useState(<></>);

  useEffect(() => {
    if (currentPassword && currentPassword === "MTIzNDU2") {
      setLoginMessage(
        <>
          <div
            style={{
              backgroundColor: "#42a4f5",
              borderRadius: "2rem",
              padding: "3rem",
            }}
          >
            <b>Velkommen, admin</b>
            <br />
            <br />
            Din engangskode:
            <br />
            <b>{atob("cmVhZG1lQ1RGe0FYOUxNUks0U05ZMzI1R1N9")}</b>
          </div>
        </>
      );
    } else {
      console.log("Feil passord");
    }
    if (!currentPassword) {
      localStorage.setItem("username", JSON.stringify("admin"));
      localStorage.setItem("password", JSON.stringify("YWRtaW4xMjM="));
    }
  }, [currentPassword]);

  return (
    <main>
      <>{loginMessage}</>
      <h1>Hei!</h1>
      <p>{info[Math.floor(Math.random() * info.length)]}</p>
      <br />
      <Link to={"/curious-image"} className={styles.primary}>
        Vis meg et spennende bilde
      </Link>
      <br />
      <Link to={"/bingo"} className={styles.secondary}>
        Jeg vil spille bingo
      </Link>{" "}
      <br />
      <Link to={"/zen-challenge"} className={styles.tertiary}>
        Trenger du en liten timeout?
      </Link>
      <br />
    </main>
  );
};

export default CtfIntro;
