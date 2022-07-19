import React from "react";

export default function FAQQuestionsFunc() {
  return (
    <>
      <div
        className="FAQQuestions"
        style={{
          color: "white",
          padding: "20px 100px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "100px",
          right: "-450px",
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
          FAQS
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
          {
            "- 'Do I need my own gear or can I rent some?' --> While many people come owning gear we also offer rentals on a first come first served basis"
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "- 'What are the different skill levels?' --> Our levels range from novice, peewee, advanced, and elite."
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "- 'What if my child has never played hockey before' --> There is no need to worry! We work with all levels and ages and are accepting of all skill levels."
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
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
