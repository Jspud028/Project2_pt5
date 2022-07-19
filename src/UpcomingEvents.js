import React from "react";

export default function UpcomingEventsThing() {
  return (
    <>
      <div
        className="UpcomingEventsContainer"
        style={{
          color: "white",
          padding: "40px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "450px",
          left: "150px",
          backgroundColor: "white",
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
          UpComing Events
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        </p>
        <p
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          {"- Summer 2022 Camp"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Funday"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Meet The Coaches"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Meet And Greet"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Team SignUp"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"- Open Lesson"}
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
