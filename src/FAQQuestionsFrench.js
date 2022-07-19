import React from "react";

export default function FAQQuestionsFuncFrench() {
  return (
    <>
      <div
        className="FAQQuestions"
        style={{
          color: "white",
          padding: "10px 10px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "100px",
          right: "-700px",
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
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"', position: "absolute", top:"100px" }} />
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
            "- 'Ai-je besoin de mon propre équipement ou puis-je en louer?' --> Bien que de nombreuses personnes viennent posséder de l’équipement, nous proposons également des locations selon le principe du premier arrivé, premier servi."
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "- 'Quels sont les différents niveaux de compétence ?' --> Nos niveaux vont de novice, pee-wee, avancé et élite"
          }
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {
            "- 'Et si mon enfant n’a jamais joué au hockey auparavant' --> Il n’y a pas lieu de s’inquiéter! Nous travaillons avec tous les niveaux et tous les âges et acceptons tous les niveaux de compétence."
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
