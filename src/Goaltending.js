import React from "react";

export default function GoaltendingFunc() {
  return (
    <>
      <div
        className="Goaltending"
        style={{
          color: "white",
          padding: "20px 60px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "300px",
          left: "500px",
          backgroundColor: "white",
          marginLeft: "800px",
          marginRight: "800px",
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
          Goaltending
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        </p>
        <p
          style={{
            color: "black",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          {"- Butterfly"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Side to Side"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Positioning"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Puck Handling"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Glove Side Focus"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Blocker Side Focus"}
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
