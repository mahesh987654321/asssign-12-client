import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import OrderDetails from "./OrderDetails";
 import { ToastContainer, toast } from "react-toastify";
const CheckoutForm = ({ order }) => {
  console.log(order);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const { minimum, name, _id, email } = order;
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transsationId, setTransationId] = useState("");
  useEffect(() => {
    fetch(`https://secure-beach-51021.herokuapp.com/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ minimum }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          console.log(data.clientSecret);
        }
      });
  }, [minimum]);

  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransationId(paymentIntent.id);
      setSuccess("Your payment is completed");
      toast("success");
      //
      const payment = {
        order: _id,
        transsationId: paymentIntent.id,
      };
      fetch(`https://secure-beach-51021.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  //   confirm card payment
  return (
    <div>
      <ToastContainer />
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm mt-4 btn-primary"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
          <div className="text-green-700">
            <p>{success}</p>
            <p>
              Your transaction Id is:{" "}
              <span className="text-orange-600 font-bold">{transsationId}</span>
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default CheckoutForm;
