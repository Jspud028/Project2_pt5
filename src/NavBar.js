import React from "react";

export default function NavBar() {
  return (
    <>
      <div
        className="navBar"
        style={{
          color: "white",
          backgroundColor: "rgb(210, 210, 210)",
          textAlign: "center",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        <a
          className="button"
          href="/HomePage"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Home
        </a>
        <a
          className="button"
          href="/Lessons"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Lessons
        </a>
        <a
          className="button"
          href="/ClubPlay"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Club Play
        </a>
        <a
          className="button"
          href="/AboutUs"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          About Us
        </a>
        <a
          className="button"
          href="/FAQ"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          FAQ
        </a>
        <a
          className="button"
          href="/Francis"
          style={{
            textDecoration: "none",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            appearance: "button",
            color: "white",
            backgroundColor: "rgb(148, 145, 145)",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          FrancaisFAQ
        </a>
        <input
          type="text"
          placeholder="Search.."
          style={{
            color: "black",
            padding: "6px",
            border: "none",
            cssFloat: "right",
            marginTop: "8px",
            marginRight: "16px",
            fontSize: "17px",
            fontFamily: '"Trebuchet MS"'
          }}
        />
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
