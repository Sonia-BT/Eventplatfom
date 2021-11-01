import "./SignIn.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
//import FormikControl from "./FormikControl";

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
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required("Email is Required"),
        password: yup.string().required("Password is Required"),
      })}
      onSubmit={(values) => {
        console.log("Submitting :", values);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="Auth_Body">
            <div className="BigContainer">
              <form
                className="SignIn_SignUp In"
                // onSubmit={(e) => {
                //   setData(e);
                // }}
                onSubmit={handleSubmit}
              >
                <div className="SignInForm">
                  <h3>Login</h3>
                </div>
                <div className="message messageError"></div>
                <div className="InfosForm">
                  <div className="Item">
                    <h5 className="Title">UserName/email</h5>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder=" MarkSmith@gmail.com"
                      className={touched.email && "error"}
                    />
                    {touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="inputMessageError"></div>
                  <div className="Item">
                    <h5 className="Title">Password</h5>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="InputError"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder=" ******"
                      className={touched.password && "error"}
                    />
                    {touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="Item">
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
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
      }}
    </Formik>
  );
}

export default SignIn;
