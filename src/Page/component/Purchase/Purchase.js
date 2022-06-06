import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { isError } from "react-query";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebaseinit";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      minimum: event.target.minimum.value,
      phone: event.target.phone.value,
      pricePerUnit: event.target.pricePerUnit.value,
      availablQuantity: event.target.availablQuantity.value,
      minimumQuantity: event.target.minimumQuantity.value,
    };

    axios
      .post("https://secure-beach-51021.herokuapp.com/order", order)
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (data.insertedId) {
          toast("Ordered Successful");
        }
        event.target.reset();
      });
    if (event.target.availablQuantity.value < 100) {
      toast("Not allowed");
    }
    console.log(event.target.availablQuantity.value);
  };

  const [purchase, setPurchase] = useState({});

  const [cart, setCart] = useState([]);
  const [increase, setIncrease] = useState(100);
  const [minus, setMinus] = useState();

  useEffect(() => {
    fetch(`https://secure-beach-51021.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);

  return (
    <>
      <ToastContainer />
      <p className="flex justify-center text-3xl text-primary font-bold">
        Purchase Page
      </p>
      <div className="flex items-center w-2/5 mx-auto my-5">
        <form
          className="flex-col  justify-center items-center mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <span>Name</span>
            <input
              type="text"
              // disabled
              className="input mb-3 input-bordered w-full input-secondary"
              value={purchase.name}
              {...register("name")}
            />
          </div>
          <label htmlFor="">Price Per Unit</label>
          <input
            type="text"
            // disabled
            className="input mb-3 input-bordered w-full input-secondary"
            value={purchase.pricePerUnit}
            {...register("pricePerUnit")}
          />
          <label htmlFor="">Available Qualtity</label>
          <input
            type="text"
            // disabled
            className="input mb-3 input-bordered w-full input-secondary"
            value={purchase.availablQuantity}
            {...register("availablQuantity")}
          />
          <label htmlFor="">Minimum Quantity</label>
          <input
            type="text"
            // disabled
            className="input mb-3 input-bordered w-full input-secondary"
            value={purchase.minimumQuantity}
            {...register("minimumQuantity")}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            // disabled
            value={user?.email}
            className="input mb-3 input-bordered w-full input-secondary"
            {...register("email", { required: true })}
          />
          <div className="flex">
            <label htmlFor="">Order</label>
            <input
              type="number"
              className="input mb-3 input-bordered w-full input-secondary"
              {...register("minimum", { required: true })}
            />
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            placeholder="Enter you Phone number"
            className="input mb-3 input-bordered w-full input-secondary"
            {...register("phone", { required: true })}
          />
          <span>
            <input className="btn btn-primary w-full" type="submit" />
          </span>
        </form>
      </div>
    </>
  );
};

export default Purchase;
