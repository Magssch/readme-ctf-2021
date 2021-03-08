import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <Link to={"/ctf-intro"} className={styles.headerLink}>
          Meny
        </Link>
        <p className={styles.headerText}>
          {props?.children || "readmeCTF 2021"}
        </p>
      </header>
      <div style={{ height: "40px" }}></div>
    </>
  );
};

export default Header;
