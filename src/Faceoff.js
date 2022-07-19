import React from "react";
import faceoffCircle from "./Images/faceoffCircle.png";

export default function FaceOff() {
  return (
    <>
      <img
        alt="faceoffCircle"
        src={faceoffCircle}
        
        style={{ color: "white", fontFamily: '"Trebuchet MS"' , position: "absolute", bottom:"10px"}}
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
