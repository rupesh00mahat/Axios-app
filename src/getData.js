import React from "react";
import Axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";

function GetData() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();
    Axios.post("https://hub.dummyapis.com/employee?noofRecords=1&idStarts=1", {
      username: firstName,
      mail: email,
    }).then((response) => {
      console.log(response);
    });
    console.log(firstName, email);
  }
  return (
    <>
      <form>
        <input
          type="text"
          id="firstName"
          className="textfield"
          name="firstName"
          placeholder="FirstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          id="firstName"
          className="textfield"
          name="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="submit"
          className="submit"
          onClick={(e) => {
            submitForm(e);
          }}
        />
      </form>
    </>
  );
}

export default GetData;
