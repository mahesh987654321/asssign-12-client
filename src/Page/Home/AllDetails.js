import React from "react";
import { useNavigate } from "react-router-dom";

const AllDetails = ({ service }) => {
  const {
    image,
    name,
    Description,
    minimumQuantity,
    availablQuantity,
    pricePerUnit,
    _id,
  } = service;
  const navigate = useNavigate();
  const handelAdd = (event) => {
    navigate(`/service/${_id}`);
  };
  return (
    <div>
      <div className="card h-full card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Details: {Description}</p>
          <p>Minimum Quantity: ${minimumQuantity}</p>
          <p>Available Quantity: ${availablQuantity} </p>
          <p>Price per Unit: ${pricePerUnit}</p>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <button onClick={() => handelAdd()} className="btn btn-primary">
                Buy Now
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDetails;
