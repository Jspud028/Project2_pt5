import React from "react";

export default function OurRinkLocationsFunc() {
  return (
    <>
      <div
        className="overlay"
        style={{
            position: "absolute",
            right: "300px",
            top: "300px",
          color: "white",
          fontWeight: "bold",
          fontSize: "30px",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        Our Rink Locations
      </div>
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
