import React from "react";

export default function ForwardDefenceFunc() {
  return (
    <>
      <div
        className="forwardAndDefence"
        style={{
          color: "white",
          padding: "20px 60px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "330px",
          right: "1400px",
          backgroundColor: "white",
          marginLeft: "800px",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Forward/Defence
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        </p>
        <p
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          {"- Faceoff Lessons"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Skating"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Shooting"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Passing"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Gap Control"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Mental Health"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Nutrition"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- $150 Per Lesson"}
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
