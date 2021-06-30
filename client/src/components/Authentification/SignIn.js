import "./SignIn.css";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [users, getUsers] = useState([""]);
  const [input1, getInput1] = useState("");
  const [input2, getInput2] = useState("");
  const getData = async (e) => {
    e.preventDefault();

    try {
      if (input1 && input2) {
        const { data } = await axios.post(`http://localhost:5000/user`, {
          username: input1,
          email: input1,
          password: input2,
        });
        getUsers([
          ...users,
          {
            username: data.data.username,
            email: data.data.email,
            password: data.data.password,
          },
        ]);
        getInput1("");
        getInput2("");
      }
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Auth_Body">
      <div className="BigContainer">
        <form className="SignIn_SignUp">
          <div className="SignInForm">
            <h3>Login</h3>
          </div>
          <div className="message messageError"></div>
          <div className="InfosForm">
            <div className="Item">
              <h5 className="Title">UserName/email</h5>
              <input
                type="text"
                autofocus
                placeholder=" Mark89/MarkSmith@gmail.com"
              ></input>
            </div>
            <div className="inputMessageError"></div>
            <div className="Item">
              <h5 className="Title">Password</h5>
              <input
                type="password"
                className="InputError"
                placeholder=" **********************"
              ></input>
            </div>
            <div className="Item">
              <button type="submit">Submit</button>
            </div>
            <div className="formText">
              <p>
                <a href="#" className="formLink">
                  Forgot Your Password?{" "}
                </a>
              </p>
            </div>
            <div className="formText">
              <p>
                <a className="formLink" href="./SignUp">
                  Don't have an account? Create account?
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
