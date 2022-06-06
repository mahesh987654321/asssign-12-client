import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L2r1hDLd8c687tP0GromSllUauaZjrlz4IzddZW2ZZxFpo11nB6kdG8kQiAinrbSytjtD8ZoB8Af2HICjX4j8Ft00SeFEhKLx"
  );
  const { id } = useParams();
  const url = `https://secure-beach-51021.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card-body">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order} />
                </Elements>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2>Ordered by: {order.name}</h2>
                <p>Price is: {order.minimum}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
