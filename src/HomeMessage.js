import React from "react";

export default function HomeMessage() {
  return (
    <>
      <div
        className="MainContainer"
        style={{
          color: "white",
          padding: "20px 20px 50px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "500px",
          left: "1px",
          backgroundColor: "white",
          marginLeft: "600px",
          marginRight: "600px",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Home
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        </p>
        <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }}>
          {"Welcome to Iced Out Hockey School where our main goal is"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"for you to have fun and learn along the way"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"Feel free to browse and email us at: Icedouthockey@gmail.com"}
        </p>
        <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }} />
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
