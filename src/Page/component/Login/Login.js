import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";

import auth from "../../../firebaseinit";
import Loading from "../Loading/Loading";
import Hooks from "../Hooks/Hooks";
const Login = () => {
  const [sendPasswordResetEmail, loading] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const [signInWithEmailAndPassword, user, loading1, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = Hooks(user || guser);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;
  const navigate = useNavigate();
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  console.log();
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  if (loading || loading1) {
    return <Loading></Loading>;
    // return <p>Loading........</p>;
  }
  const handelButton = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post(`http://localhost:5000/login`, { email });
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
    if (email !== password) {
      setError1("Something wrong");
      return;
    }
  };

  if (token) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <div className="w-3/12 mx-auto">
      <form onSubmit={handelButton} className="w-50 mt-5 mx-auto">
        <h2 className="text-center">Login Here</h2>
        <label htmlFor="">Email Address</label>
        <br />
        <input
          onBlur={handelEmail}
          type="email"
          placeholder="Enter email"
          className="input input-bordered input-success w-full mb-5"
        />{" "}
        <label htmlFor="">Password</label>
        <br />
        <input
          onBlur={handelPassword}
          type="password"
          placeholder="Enter Password"
          className="input input-bordered input-success w-full mb-5"
        />{" "}
        {errorElement}
        <p>{error1}</p>
        <button className="w-full btn my-5" variant="primary" type="submit">
          Submit
        </button>
        <div className="d-flex justify-content-around align-items-center">
          <button
            className="bg-primary p-1 mt-2"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
          >
            Reset password
          </button>
        </div>
        <Link className="text-red-800 decoration-solid" to="/SignUp">
          Don't have a account Please Regester
        </Link>
        <br />
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-full"
        >
          Sign in with Google
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
