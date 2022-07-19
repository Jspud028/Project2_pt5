import React from "react";

export default function HaveAQuestionFuncFrench() {
  return (
    <>
      <div
        className="HaveaQuestion"
        style={{
          color: "white",
          padding: "10px 20px 50px",
          position: "absolute",
          bottom: "300px",
          right: "800px",
          marginLeft: "20px",
          marginRight: "20px",
          borderRadius: "5px",
          maxWidth: "400px",
          maxHeight: "2000px",
          backgroundColor: "white",
          marginTop: "0px",
          fontFamily: '"Trebuchet MS"'
        }}
      >
        <form
          action="PlaceHolder.php"
          style={{
            color: "white",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
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
              Avez-Vous une question?{" "}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          </p>
          <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }}>
            {"Have Something youd like to ask?"}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
            {"ask us here or email us at Icedouthockey@gmail.com"}
          </p>
          <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }} />
          <label
            htmlFor="firstName"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            Prénom
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder=" Prénom"
            style={{
              color: "black",
              backgroundColor: "white",
              width: "100%",
              height: "30px",
              fontSize: "16px",
              fontFamily: '"Trebuchet MS"'
            }}
          />
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <label
            htmlFor="lastName"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            Nom de Famille
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder=" Nom de Famille"
            style={{
              color: "black",
              backgroundColor: "white",
              width: "100%",
              height: "30px",
              fontSize: "16px",
              fontFamily: '"Trebuchet MS"'
            }}
          />
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <label
            htmlFor="email"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            Courriel
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Courriel"
            style={{
              color: "black",
              backgroundColor: "white",
              width: "100%",
              height: "30px",
              fontSize: "16px",
              fontFamily: '"Trebuchet MS"'
            }}
          />
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <label
            htmlFor="question"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            votre question ici
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="question"
            name="question"
            type="text"
            placeholder=" votre question ici!"
            style={{
              color: "black",
              backgroundColor: "white",
              width: "100%",
              height: "30px",
              fontSize: "16px",
              fontFamily: '"Trebuchet MS"'
            }}
          />
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            type="submit"
            defaultValue="Submit"
            style={{
              color: "black",
              height: "30px",
              backgroundColor: "white",
              width: "100%",
              fontSize: "20px",
              fontFamily: '"Trebuchet MS"'
            }}
          />
        </form>
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
