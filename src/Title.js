import React from "react";

export default function Title() {
  return (
    <>
      <h1
        style={{
          color: "white",
          marginLeft: "100px",
          display: "inline-block",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        {" "}
        Iced Out Hockey School
      </h1>
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
