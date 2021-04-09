import logo from "./images/readme.png";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import CuriousImage from "./pages/CuriousImage";
import React from "react";
import CtfIntro from "pages/CtfIntro";
import BingoBoard from "pages/BingoBoard";
import Header from "components/Header";
import ZenChallenge from "pages/ZenChallenge";

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
              <br />
              Velkommen til readmes store CTF-skattejakt! Her må du bruke dine
              CTF-kunnskaper for å løse diverse oppgaver. Dersom du kommer deg
              til et flagg så må du notere deg ned dette. Flaggene er på
              formatet <b>readmeCTF{"{XXXXXXXXXXXXXXX}"}</b>, og målet med
              konkurransen er å samle flest av disse flaggene.
              <br />
              <h2>
                Konkurransen er nå over, og vi gratulerer så mye til vinnerne av
                Foodora-gavekort! Takk til alle som sendte inn flaggene de fant!
              </h2>
            </div>
            <header className="start">
              <br />
              <img src={logo} className="App-logo" alt="logo" />
              <br />
              <h2>Ikke prøvd CTF-en enda?</h2>
              <h1>
                <Link to={"/ctf-intro"} className={"link"}>
                  Prøv den her
                </Link>
              </h1>
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
