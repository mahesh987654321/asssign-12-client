import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseinit";
import OrderDetails from "./OrderDetails";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://secure-beach-51021.herokuapp.com/orders?email=${email}`;
      const { data } = await axios.get(url);
      setOrder(data);
    };
    getOrders();
  }, [user, order]);

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-center text-primary mx-10">My Orders</h1>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {order.map((order, index) => (
                <OrderDetails order={order} index={index}></OrderDetails>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
