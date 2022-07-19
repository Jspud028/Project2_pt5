import React from "react";
import ActionShot from "./Images/actionShot.png";

export default function ActionShotFunc() {
  return (
    <>
      <img
        alt="actionShot"
        src={ActionShot}
        style={{ color: "white", fontFamily: '"Trebuchet MS"', position: "absolute", left:"200px" }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
body {
  background-color: black;
  color: white;
  font-family: "Trebuchet MS";
}
`
        }}
      />
    </>
  );
}
