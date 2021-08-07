import "./SignUp.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as yup from "yup";

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
      // console.log(user);
      console.log(toSignIn);
      if (toSignIn === true) {
        history.push("/Authentification/SignIn");
      }
      console.log("1", toSignIn);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitting");
      }}
      validationSchema={yup.object().shape({
        username: yup
          .string()
          .required("UserName is Required")
          .min(4, "username too short-Should be 4 characters min "),
        email: yup.string().email().required("Email is Required"),
        password: yup
          .string()
          .required("Password is Required")
          .min(6, "Password is too short -Should be 6 characters minimum")
          .matches(/(?=.*[0-9])/, "Password must contain a number"),
      })}
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
        // console.log(touched);
        return (
          <div className="Auth_Body">
            <div className="BigContainer">
              <form className="SignIn_SignUp Up" onSubmit={handleSubmit}>
                <div className="SignUpForm ">
                  <h3>Create account</h3>
                </div>
                <div className="message messageError"></div>
                <div className="InfosForm">
                  <div className="Item">
                    <h5 className="Title">UserName</h5>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      placeholder=" Mark89"
                      className={errors.username && touched.username && "error"}
                    />
                    {errors.username && touched.username && (
                      <div className="input-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="Item">
                    <h5 className="Title">Address Email</h5>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder=" MarkSmith@gmail.com"
                      className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="inputMessageError"></div>
                  <div className="Item">
                    <h5 className="Title">Create Password</h5>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="InputError"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder=" ******"
                      className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="Item">
                    <h5 className="Title">Confirm Your Password</h5>
                    <input
                      type="password"
                      // onChange={(e) => {
                      //   setInput4(e.target.value);
                      // }}
                      // value={input4}
                      placeholder=" ******"
                    ></input>
                  </div>
                  <div className="Item">
                    <button
                      type="submit"
                      // onClick={() => {
                      //   setTosignIn(true);
                      // }}
                      disabled={isSubmitting}
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
      }}
    </Formik>
  );
  //
}

export default SignUp;
