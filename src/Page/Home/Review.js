import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";
import "./Review.css";
const Review = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://secure-beach-51021.herokuapp.com/review`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [orders]);
  return (
    <div>
      <h1 className="text-center text-5xl text-primary font-bold mt-20 mb-20 cen mx-5">
        <span className="customer my-5">Customer's Review</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 crd gap-20 w-6/12 lg:w-10/12 mx-auto">
        {orders.slice(-3).map((person) => (
          <ReviewDetails person={person}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Review;
