import React, { useState } from "react";
import { useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

const HackermanChallenge = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!loaded) {
      for (let index = 0; index < 15; index++) {
        history.push("/hackerman", "");
      }
    }
    setLoaded(true);
  }, [history, loaded]);

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          history.push("/hackerman/login", "");
        }
      }
    });
  }, [history, locationKeys]);

  const initialMinute = 15;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <main>
      <Switch>
        <Route exact path="/hackerman">
          <h1>Noen ganger</h1>
          <p>
            Noen ganger må man ta et steg (eller 20) tilbake og tenke litt over
            ting.
          </p>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <br />
        </Route>
        <Route path="/hackerman/login">
          <></>
        </Route>
      </Switch>
    </main>
  );
};

export default HackermanChallenge;
