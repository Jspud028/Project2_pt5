import React from "react";

export default function CarPoolSignupFunc() {
  return (
    <>
      <div
        className="Carpool"
        style={{
          color: "white",
          padding: "10px 20px 50px",
          position: "absolute",
          bottom: "300px",
          right: "900px",
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
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: '"Trebuchet MS"'
          }}
        >
          Carpool Signup
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        </p>
        <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }}>
          {"Need a hand getting to and from games?"}
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          {"Sign up for carpooling now!"}
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
          htmlFor="Tea,"
          style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
        >
          Team
        </label>
        <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
        <input
          id="Team"
          name="team"
          type="text"
          placeholder="Team"
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
