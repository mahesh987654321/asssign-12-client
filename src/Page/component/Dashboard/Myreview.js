import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebaseinit";
import { ToastContainer, toast } from "react-toastify";
import "./Myreview.css";
const Myreview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const order = {
      comment: event.target.comment.value,
    };

    axios
      .post("https://secure-beach-51021.herokuapp.com/review", order)
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (data.insertedId) {
          toast("Inserted Id");
        }
        event.target.reset();
      });
  };
  return (
    <div className="mt-10">
      <ToastContainer />
      <p className="text-3xl text-primary">Write a Review</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} value={user?.displayName} />
        <textarea
          type="text"
          className="textarea textarea-secondary"
          placeholder="Add a Review From experience"
          {...register("comment", { required: true, maxLength: 80 })}
        />

        <input className="bg-primary p-2 text-white rounded-md" type="submit" />
      </form>
    </div>
  );
};

export default Myreview;
