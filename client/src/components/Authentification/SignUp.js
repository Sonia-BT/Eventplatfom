import "./SignUp.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as yup from "yup";

function SignUp() {
  const [user, setUser] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [toSignIn, setTosignIn] = useState(false);
  const history = useHistory();
  const setData = async (e) => {
    e.preventDefault();

    try {
      if (input1 && input2 && input3) {
        const { data } = await axios.post(`http://localhost:5000/user`, {
          username: input1,
          email: input2,
          password: input3,
          // validatePassword: input4,
        });
        setUser([
          ...user,
          {
            username: data.data.username,
            email: data.data.email,
            password: data.data.password,
            // validatePassword: data.data.validatePassword,
          },
        ]);
        setInput1("");
        setInput2("");
        setInput3("");
        // setInput4("");
      }
      console.log(user);
      if (toSignIn === true) {
        history.push("/Authentification/SignIn");
      }
      console.log("1", toSignIn);
    } catch (error) {
      console.log(error);
    }
  };
  // <Formik
  //   initialValues={{ email: "", password: "" }}
  //   onSubmit={(values, { setSubmitting }) => {
  //     console.log("Submitting");
  //   }}
  //   validationSchema={yup.object().shape({
  //     username: yup
  //       .string()
  //       .required("Required")
  //       .min(3, "username too short - Should be 3 characters minimum "),
  //     email: yup.string().email().required("Required"),
  //     password: yup
  //       .string()
  //       .required("Required")
  //       .min(8, "Password is too short -Should be 8 characters minimum")
  //       .matches(/(?=.*[0-9])/, "Password must containe a number"),
  //   })}
  // >
  //   {(props) => {
  //     const {
  //       values,
  //       touched,
  //       errors,
  //       isSubmitting,
  //       handelChange,
  //       handelBlur,
  //       handelSubmit,
  //     } = props;
  //   }}
  return (
    <div className="Auth_Body">
      <div className="BigContainer">
        <form className="SignIn_SignUp" onSubmit={(e) => setData(e)}>
          <div className="SignUpForm ">
            <h3>Create account</h3>
          </div>
          <div className="message messageError"></div>
          <div className="InfosForm">
            <div className="Item">
              <h5 className="Title">UserName</h5>
              <input
                type="text"
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
                value={input1}
                placeholder=" Mark89"
              ></input>
            </div>
            <div className="Item">
              <h5 className="Title">Address Email</h5>
              <input
                type="text"
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
                value={input2}
                placeholder=" MarkSmith@gmail.com"
                // className={errors.email && touched.email && "error"}
              />
              {/* {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )} */}
            </div>
            <div className="inputMessageError"></div>
            <div className="Item">
              <h5 className="Title">Create Password</h5>
              <input
                type="password"
                className="InputError"
                onChange={(e) => {
                  setInput3(e.target.value);
                }}
                value={input3}
              />
            </div>
            <div className="Item">
              <h5 className="Title">Confirm Your Password</h5>
              <input
                type="password"
                // onChange={(e) => {
                //   setInput4(e.target.value);
                // }}
                // value={input4}
                placeholder=" **********************"
              ></input>
            </div>
            <div className="Item">
              <button
                type="submit"
                onClick={() => {
                  setTosignIn(true);
                }}
                // disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
            <div className="formText">
              <p>
                <a className="formLink" href="./SignIn">
                  Already have an account? Sign In?
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // </Formik>;
}

export default SignUp;
