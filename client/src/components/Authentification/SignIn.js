import "./SignIn.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const setData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:5000/user`);
      console.log(data);
      if (email && password) {
        const foundUser = data.data.find(
          (el) => el.email === email && el.password === password
        );
        if (foundUser) {
          history.push("/Pages/Principal");
        } else {
          alert("Don't have an account? Create one!");
        }
      } else {
        if (!email) {
          alert("Oups you forgot your email adress!");
        } else if (!password) {
          alert("Oups you forgot your password!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth_Body">
      <div className="BigContainer">
        <form
          className="SignIn_SignUp In"
          onSubmit={(e) => {
            setData(e);
          }}
        >
          <div className="SignInForm">
            <h3>Login</h3>
          </div>
          <div className="message messageError"></div>
          <div className="InfosForm">
            <div className="Item">
              <h5 className="Title">UserName/email</h5>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder=" Mark89/MarkSmith@gmail.com"
              ></input>
            </div>
            <div className="inputMessageError"></div>
            <div className="Item">
              <h5 className="Title">Password</h5>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                // className="InputError"
                placeholder=" **********************"
              ></input>
            </div>
            <div className="Item">
              <button type="submit">Submit</button>
            </div>
            <div className="formText">
              <p>
                <a className="formLink" href="./SignUp">
                  Forgot Your Password?
                </a>
              </p>
            </div>
            <div className="formText">
              <p>
                <a className="formLink" href="./SignUp">
                  Don't have an account? Create an account?
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
