import React from "react";

export default function LabelsFunc() {
  return (
    <>
      <h3
        style={{
            position: "absolute",
          color: "white",
          marginBottom: "50px",
          marginTop: "550px",
          marginLeft: "500px",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        Goaltending Training    
                                               Forwards/Defence
        Training{" "}
      </h3>
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
