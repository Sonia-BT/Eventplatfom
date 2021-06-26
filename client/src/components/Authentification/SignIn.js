import "./SignIn.css";

function SignIn() {
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
