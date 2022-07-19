import React from "react";
import goalieCrease from "./Images/creaseAndNet.png";

export default function GoalieCrease() {
  return (
    <>
      <img
        alt="creaseAndNet"
        src= {goalieCrease}
        style={{ color: "white", fontFamily: '"Trebuchet MS"', bottom: "10px", position: "absolute", left: "500px" }}
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
