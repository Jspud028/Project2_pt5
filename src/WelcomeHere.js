import React from "react";

export default function WelcomeHere() {
  return (
    <>
      <div
        className="FindOthersContainer"
        style={{
          color: "white",
          padding: "10px 20px 25px",
          position: "absolute",
          bottom: "300px",
          right: "250px",
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
            Whatever Level Youre Welcome Here
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          </p>
          <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }}>
            {"Whether youre a new player or Future Pro"}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
            {"we welcome you to find others in"}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
            {"your skill bracket now!"}
          </p>
          <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }} />
          <label
            htmlFor="firstName"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            First Name
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
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
            Last Name
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
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
            Email
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
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
            htmlFor="skillLevel"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            Skill Level
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="skillLevel"
            name="skillLevel"
            type="text"
            placeholder="Skill Level"
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
