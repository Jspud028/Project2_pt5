import React from "react";

export default function AboutOurTeamFunc() {
  return (
    <>
      <div
        className="MainContainer"
        style={{
          color: "white",
          padding: "20px 20px 200px",
          borderRadius: "5px",
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
            fontSize: "20px",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          About our team
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "Here at Iced Out Hockey School, we belive the first step to greatness is having fun"
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "In order to do that we think the best method is to train and play all in one place"
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "making lasting friendships and learning valuable lessons along the way"
          }
        </p>
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
