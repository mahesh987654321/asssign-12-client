// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Hooks from "./Hooks";

// const OrderDetails = ({ order, index }) => {
//   const { name, email, minimum, phone, _id } = order;

//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const getOrders = async () => {
//       const url = `http://localhost:5000/order`;
//       const { data } = await axios.get(url);
//       setOrders(data);
//     };
//     getOrders();
//   }, [order]);

//   const [ordered] = Hooks();
//   ordered.map((service) => <tr>{(service = { service })}</tr>);
//   // console.log(service);
//   const handelDelete = (id) => {
//     const sure = window.confirm("Are you sure eto confirm delete");
//     if (sure) {
//       const url = `http://localhost:5000/order/${id}`;
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           const remaining = orders.filter((order) => order._id !== id);

//           if (data) {
//           }
//         });
//     }
//   };

//   return (
//     <>
//       {/* <div>{ordered[1].transsationId}</div> */}
//       <div>
//         <tr>
//           <th>{index + 1}</th>
//           <td>{name}</td>
//           <td>{email}</td>
//           <td>{minimum}</td>
//           <td>{phone ? phone : <p className="text-red-700">No number</p>}</td>
//           <td>
//             {!order.paid && (
//               <button
//                 onClick={() => handelDelete(_id)}
//                 className=" bg-red-700 btn-xs text-white"
//               >
//                 Cancel
//               </button>
//             )}
//           </td>
//           <td>
//             {minimum && !order.paid && (
//               <Link to={`/dashboard/payment/${_id}`}>
//                 <button className=" bg-primary btn-xs text-white">Pay</button>
//               </Link>
//             )}
//             {minimum && order.paid && (
//               <span className="text-red-700 ">Paid</span>
//             )}
//           </td>
//         </tr>
//       </div>
//     </>
//   );
// };

// export default OrderDetails;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hooks from "./Hooks";

const OrderDetails = ({ order, index }) => {
  const { name, email, minimum, phone, _id } = order;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://secure-beach-51021.herokuapp.com/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [order]);

  const [ordered] = Hooks();
  ordered.map((service) => <tr>{(service = { service })}</tr>);
  // console.log(service);
  const handelDelete = (id) => {
    const sure = window.confirm("Are you sure eto confirm delete");
    if (sure) {
      const url = `https://secure-beach-51021.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((order) => order._id !== id);

          if (data) {
          }
        });
    }
  };

  return (
    <>
      {/* <div>{ordered[1].transsationId}</div> */}
      <div>
        <tr>
          <th>{index + 1}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td>{minimum}</td>
          <td>{phone ? phone : <p className="text-red-700">No number</p>}</td>
          <td>
            <div></div>
          </td>
          <td>
            {minimum && !order.paid && (
              <Link to={`/dashboard/payment/${_id}`}>
                <button className=" bg-primary btn-xs text-white">Pay</button>
              </Link>
            )}
            {minimum && order.paid && (
              <span className="text-red-700 ">Paid</span>
            )}
          </td>
        </tr>
      </div>
    </>
  );
};

export default OrderDetails;
