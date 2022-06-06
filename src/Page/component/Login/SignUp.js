import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Loading from "../Loading/Loading";
import auth from "../../../firebaseinit";
import Hooks from "../Hooks/Hooks";

const SignUp = () => {
  const [signInWithGoogle, user2, loading] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");
  const [error1, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading1, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = Hooks(user || user2);
  if (loading || loading1) {
    return <Loading></Loading>;
    // <p>Loading...........</p>;
  }
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPAss = (event) => {
    setConpass(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (token) {
    navigate(from, { replace: true });
    // navigate("/");
  }
  const handelSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (password !== conpass) {
      setError("Password is not match");
      return;
    }
  };
  return (
    <div className="w-3/12 mx-auto">
      <ToastContainer />

      <form onSubmit={handelSubmit} className="w-50 mx-auto mt-5">
        <h3 className="text-center my-5">Regester Form</h3>
        <label htmlFor="">Email Address</label>
        <br />
        <input
          onBlur={handelEmail}
          type="email"
          placeholder="Enter email"
          className="input input-bordered input-success w-full mb-5"
        />{" "}
        <br />
        <label htmlFor="">Enter Password</label>
        <br />
        <input
          onBlur={handelPassword}
          type="password"
          placeholder="Password"
          className="input input-bordered input-success w-full mb-5"
        />
        <br />
        <label htmlFor="">Confirm Password</label>
        <br />
        <input
          onBlur={handelConfirmPAss}
          type="password"
          placeholder="confirm Password"
          className="input input-bordered input-success w-full mb-5"
        />
        <p className="text-danger">{error1}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-full text-white"
        >
          Sign in with Google
        </button>
        <Link className="text-green-700 link my-5 " to="/login">
          Already Have a account
        </Link>
        <div className="d-flex justify-content-around">
          <button
            className="bg-primary p-1 mt-2 mb-2 w-full"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
          >
            Reset password
          </button>
        </div>
        <button className="w-100 btn w-full" variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
