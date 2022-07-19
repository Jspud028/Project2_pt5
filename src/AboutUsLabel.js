import React from "react";

export default function AboutUsLabelFunc() {
  return (
    <>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        About Us
      </h2>
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
