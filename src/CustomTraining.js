import React from "react";

export default function CustomTrainingFunc() {
  return (
    <>
      <div
        className="CustomTraining"
        style={{
          color: "white",
          padding: "10px 20px 50px",
          position: "absolute",
          bottom: "200px",
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
            Custom Training
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          </p>
          <p style={{ color: "black", fontFamily: '"Trebuchet MS"' }}>
            {"Have Something specifc you want to work on?"}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
            {"Let us know and we will match you with a trainer"}
            <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
            {"who has the knowledge and skills you need!"}
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
          <label
            htmlFor="CustomTraining"
            style={{ color: "white", fontFamily: '"Trebuchet MS"' }}
          >
            Request for Custom Training
          </label>
          <br style={{ color: "white", fontFamily: '"Trebuchet MS"' }} />
          <input
            id="CustomTraining"
            name="CustomTraining"
            type="text"
            placeholder="Custom Training Request"
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
