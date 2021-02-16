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
      }}
    >
      <h1>Look at this great image, we have the best images!</h1>
      <img
        src={curiousImage}
        alt={"Don't mind this, this is just an image!"}
        style={{ maxHeight: "80vh" }}
      />
    </div>
  );
};

export default CuriousImage;
