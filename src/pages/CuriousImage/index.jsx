import React from "react";
import curiousImage from "./i_am_just_an_image.jpg";

const CuriousImage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1>
        Dette bildet kan du beholde, en gave fra{" "}
        <span style={{ fontFamily: "OCRA" }}>readme</span> ❤️
      </h1>
      <img
        src={curiousImage}
        alt={"Et flott bilde"}
        style={{ maxHeight: "80vh" }}
      />
    </div>
  );
};

export default CuriousImage;
