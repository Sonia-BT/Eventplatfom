// import "./Authentification.css";
// import { useState } from "react";
// import axios from "axios";

// function Authentification() {
//   const [users, setUsers] = useState([""]);
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");

//   const setData = async (e) => {
//     e.preventDefault();
//     try {
//       if (input1 && input2 && input3) {
//         const { data } = await axios.post(`http://localhost:5000/user`, {
//           username: input1,
//           email: input2,
//           password: input3,
//         });
//         setUsers([
//           ...users,
//           {
//             username: data.data.username,
//             email: data.data.email,
//             password: data.data.password,
//           },
//         ]);
//         setInput1("");
//         setInput2("");
//         setInput3("");
//       }
//       console.log(users);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="Auth_Body">
//       <div className="BigContainer">
//         <form
//           className="SignIn_SignUp"
//           onSubmit={(e) => {
//             setData(e);
//           }}
//         >
//           <div className="SignInUpForm " id="SignUp">
//             <h3>Create account</h3>
//           </div>
//           <div className="message messageError"></div>
//           <div className="InfosForm">
//             <div className="Item">
//               <h5 className="Title">UserName</h5>
//               <input
//                 type="text"
//                 onChange={(e) => {
//                   setInput1(e.target.value);
//                 }}
//                 value={input1}
//                 autofocus
//                 placeholder=" Mark89"
//               ></input>
//             </div>
//             <div className="Item">
//               <h5 className="Title">Address Email</h5>
//               <input
//                 type="text"
//                 onChange={(e) => {
//                   setInput2(e.target.value);
//                 }}
//                 value={input2}
//                 placeholder=" MarkSmith@gmail.com"
//               ></input>
//             </div>
//             <div className="inputMessageError"></div>
//             <div className="Item">
//               <h5 className="Title">Create Password</h5>
//               <input
//                 type="password"
//                 className="InputError"
//                 onChange={(e) => {
//                   setInput3(e.target.value);
//                 }}
//                 value={input3}
//                 placeholder=" **********************"
//               ></input>
//             </div>
//             <div className="Item">
//               <h5 className="Title">Confirm Your Password</h5>
//               <input
//                 type="password"
//                 placeholder=" **********************"
//               ></input>
//             </div>
//             <div className="Item">
//               <button type="submit">Submit</button>
//             </div>
//             <div className="formText">
//               <p>
//                 <a className="formLink" href="./" id="linkCreateAccount">
//                   Already have an account? Sign In?
//                 </a>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Authentification;
