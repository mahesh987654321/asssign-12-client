import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ToolDetails.css";
const ToolsDetails = ({ services }) => {
  const {
    name,
    pricePerUnit,
    minimumQuantity,
    availablQuantity,
    Description,
    image,
    _id,
  } = services;
  // const { id } = useParams();
  const navigate = useNavigate();
  const handelTools = (event) => {
    navigate(`/service/${_id}`);
  };
  return (
    <div>
      <div className="card h-full card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Details: {Description}</p>
          <p>Minimum Quantity: ${minimumQuantity}</p>
          <p>Available Quantity: ${availablQuantity} </p>
          <p>Price per Unit: ${pricePerUnit}</p>
          <div className="card-actions justify-end">
            <button
              className="tddd"
              onClick={() => handelTools()}
              className="btn btn-primary"
            >
              <span className="td bg-primary text-white p-2 rounded-lg">
                Buy Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetails;
