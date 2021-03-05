import BingoCell from "components/BingoCell";
import React, { useEffect, useState } from "react";
import styles from "./bingoBoard.module.css";

function shuffle(array) {
  const newArray = [...array];
  var currentIndex = newArray.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

const BingoBoard = () => {
  const [bingoBoardState, setBingoBoardState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const possibleVals = "41 42 41 4b 55 53 20 4f 4e 4c 49 4e 45 20 48 59".split(
    " "
  );
  const [bingoBoardContent, setBingoBoardContent] = useState(
    shuffle(possibleVals)
  );

  const [bingoRows, setBingoRows] = useState([false, false, false, false]);
  const [bingoCols, setBingoCols] = useState([false, false, false, false]);
  const [showBingo, setShowBingo] = useState(false);
  const [trueBingo, setTrueBingo] = useState([]);

  const updateBingoBoard = (index) => {
    let board = [...bingoBoardState];
    board[index] = !board[index];
    setBingoBoardState(board);
  };

  const requestBingo = (bingo) => {
    fetch("https://readme-ctf-v2021.web.app/api/getBingoValue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: bingo,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const checkTrueBingo = (newValue) => {
    let newTrueBingo = [...trueBingo, bingoBoardContent[newValue]];
    if (newTrueBingo.length >= 6) {
      requestBingo(newTrueBingo);
      newTrueBingo = [bingoBoardContent[newValue]];
    }
    setTrueBingo(newTrueBingo);
  };

  useEffect(() => {
    const checkBingoRows = () => {
      bingoRows.forEach((row, i) => {
        if (
          !row &&
          bingoBoardState[i] &&
          bingoBoardState[i + 4] &&
          bingoBoardState[i + 8] &&
          bingoBoardState[i + 12]
        ) {
          let rows = [...bingoRows];
          rows[i] = !rows[i];
          setBingoRows(rows);
          setShowBingo(true);
        }
      });
    };

    const checkBingoCols = () => {
      bingoCols.forEach((col, i) => {
        if (
          !col &&
          bingoBoardState[i * 4] &&
          bingoBoardState[i * 4 + 1] &&
          bingoBoardState[i * 4 + 2] &&
          bingoBoardState[i * 4 + 3]
        ) {
          let cols = [...bingoCols];
          cols[i] = !cols[i];
          setBingoCols(cols);
          setShowBingo(true);
        }
      });
    };

    checkBingoCols();
    checkBingoRows();
  }, [bingoBoardState, bingoCols, bingoRows]);

  return (
    <>
      <div className={styles.bingoBoard}>
        {showBingo && (
          <div
            className={styles.bingoOverlay}
            onClick={() => setShowBingo(false)}
          >
            <h1 className={styles.bingoText}>Bingo!</h1>
          </div>
        )}
        {bingoBoardContent.map((cell, index) => (
          <BingoCell
            key={index}
            selected={bingoBoardState[index]}
            content={bingoBoardContent[index]}
            onClick={() => {
              updateBingoBoard(index);
              checkTrueBingo(index);
            }}
          />
        ))}
      </div>
      <p style={{ backgroundColor: "black", margin: 0 }}>
        20 4f 4e 4c 49 4e 45 20 48 59 42 52 49 44 41 20 4a 41 4e 55 53 20 44 45
        4c 54 41 20 41 42 41 4b 55 53 20 4e 41 42 4c 41 20 54 49 48 4c 44 45
      </p>
    </>
  );
};

export default BingoBoard;
