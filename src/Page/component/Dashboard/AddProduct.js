import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "./Products.css";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const order = {
      image: event.target.image.value,
      name: event.target.name.value,
      Description: event.target.Description.value,
      minimumQuantity: event.target.minimumQuantity.value,
      availablQuantity: event.target.availablQuantity.value,
      pricePerUnit: event.target.pricePerUnit.value,
    };
    axios
      .post("https://secure-beach-51021.herokuapp.com/service", order)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          toast("Inserted Id");
        }
        event.target.reset();
      });
  };
  return (
    <div>
      <ToastContainer />
      <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-bordered input-warning  wdt  my-2"
          type="text"
          placeholder="Paste image URL"
          {...register("image")}
        />{" "}
        <br />
        <input
          className="input input-bordered input-warning wdt  my-2"
          type="text"
          placeholder="Enter Name"
          {...register("name", { required: true, maxLength: 80 })}
        />{" "}
        <br />
        <textarea
          className="input input-bordered input-warning  wdt  my-2"
          type="text"
          placeholder="Enter Details"
          {...register("Description", { required: true, maxLength: 80 })}
        />{" "}
        <br />
        <input
          className="input input-bordered input-warning   wdt my-2"
          type="number"
          placeholder="Enter minimum quantity"
          {...register("minimumQuantity", { required: true, maxLength: 80 })}
        />{" "}
        <br />
        <input
          className="input input-bordered input-warning  wdt my-2"
          type="number"
          placeholder="Enter Available quantity"
          {...register("availablQuantity", { required: true, maxLength: 80 })}
        />{" "}
        <br />
        <input
          className="input input-bordered input-warning wdt  my-2"
          type="number"
          placeholder="Enter Price"
          {...register("pricePerUnit", { required: true, maxLength: 80 })}
        />{" "}
        <br />
        <input className="bg-primary text-white p-2 w-full" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
