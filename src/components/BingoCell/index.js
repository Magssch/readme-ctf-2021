import React from "react";
import styles from "./bingoCell.module.css";

const BingoCell = ({ selected, content, onClick }) => {
  return (
    <div
      role="button"
      className={
        selected ? styles.cell + " " + styles.cellSelected : styles.cell
      }
      onClick={onClick}
    >
      <p>{content}</p>
    </div>
  );
};

export default BingoCell;
