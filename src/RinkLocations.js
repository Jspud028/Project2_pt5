import React from "react";
import LocationsImg from "./Images/locations.jpg"

export default function RinkLocationsFunc() {
  return (
    <>
      <img
        alt="locations"
        src={LocationsImg}
        style={{
            right: "150px",
            bottom: "300px",
            position: "absolute",
          color: "white",
          width: "600px",
          height: "300px",
          fontFamily: '"Trebuchet MS"'
        }}
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
