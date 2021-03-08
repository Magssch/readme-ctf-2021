import React, { useState } from "react";
import { useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

function verySecureEncryptionFunction(input) {
  const arr = input.split("");

  for (let index = 1; index < arr.length; index++) {
    if (index % 3 === 0) {
      arr[index] = String.fromCharCode(arr[index].charCodeAt(0) - 10);
    } else if (index % 2 === 0) {
      arr[index] = String.fromCharCode(arr[index].charCodeAt(0) * 8);
    }
  }
  for (let index = 1; index < arr.length; index++) {
    if (index % 2 === 0) {
      const temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
    }
  }
  return arr.join("");
}

const ZenChallenge = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (!loaded) {
      for (let index = 0; index < 5; index++) {
        history.push("/zen-challenge", "");
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
        setCounter(counter + 1);
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          if (counter >= 4) {
            history.push("/zen-challenge/error", "");
          }
          setLocationKeys((keys) => [location.key, ...keys]);
        }
      }
    });
  }, [history, locationKeys]);

  const initialMinute = 5;
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
          setError(true);
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
        <Route exact path="/zen-challenge">
          {error ? (
            <>
              <h1 style={{ color: "red" }}>TEKNISK FEIL</h1>
              <br />
              <img src="./ohno.jpg" style={{ height: "40%" }} />
              <br />
              <p>Beklager, det har skjedd en teknisk feil, prøv igjen!</p>
            </>
          ) : (
            <>
              <h1>Noen ganger</h1>
              <p>
                Noen ganger må man ta et steg (eller 5) tilbake og tenke litt
                over ting.
              </p>
              <h1 style={{ fontSize: "10rem" }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </h1>
              <br />
            </>
          )}
        </Route>
        <Route path="/zen-challenge/error">
          <div>
            <h1
              style={{
                height: "10rem",
              }}
            >
              S̵͎͓̞͌̒͐t̵̢͉͆͝a̸̺̠̼̒̐̓c̴̠͚̻͒͒̽k̴͎͔͉̓͆ o̴͍͉͔̔͐̀v̴͉̙̞͊̓͐e̸͖͔͑̾͜͝r̵̢͉͒̈́͘͜f̵͎͖̠͒̐͌l̴̢͕͇̈́̒ó̵̪̙̟͠͝w̵̦͚͕͐͐̽
            </h1>
            <br />
            <h2
              style={{
                backgroundColor: "#ff7373",
                borderRadius: "3rem",
                padding: "3rem",
              }}
            >
              Error code:{" "}
              {verySecureEncryptionFunction("readmeCTF{2QMT8ZLJFELMKH58}")}
            </h2>
          </div>
        </Route>
      </Switch>
    </main>
  );
};

export default ZenChallenge;
