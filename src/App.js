import logo from "./images/readme.png";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import CuriousImage from "./pages/CuriousImage";
import React from "react";
import CtfIntro from "pages/CtfIntro";
import BingoBoard from "pages/BingoBoard";
import Header from "components/Header";
import ZenChallenge from "pages/ZenChallenge";

//return Buffer.from(input).toString("base64");

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div
              style={{
                color: "white",
                margin: "auto",
              }}
            >
              Velkommen til readmes store CTF-skattejakt! Her må du bruke dine
              CTF-kunnskaper for å løse diverse oppgaver. Dersom du kommer deg
              til et flagg så må du notere deg ned dette. Flaggene er på
              formatet <b>readmeCTF{"{XXXXXXXXXXXXXXX}"}</b>, og målet med
              konkurransen er å samle flest av disse flaggene. Send inn flaggene
              du finner på epost til konkurranse[alfakrøll]abakus.no med emnet
              "Flagg fra CTF" og legg med ditt navn. De(n) som samler flest
              flagg kan vinne gavekort på Foodora!
            </div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <br />
              <br />
              <Link to={"/ctf-intro"}>Start her</Link>
            </header>
          </div>
        </Route>
        <Route path="/ctf-intro">
          <Header />
          <CtfIntro />
        </Route>
        <Route path="/curious-image">
          <Header />
          <CuriousImage />
        </Route>
        <Route path="/bingo">
          <Header />
          <BingoBoard />
        </Route>
        <Route path="/zen-challenge">
          <Header />
          <ZenChallenge />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
