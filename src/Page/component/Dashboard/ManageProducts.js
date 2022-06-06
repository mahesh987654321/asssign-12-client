import React, { useEffect, useState } from "react";
import ManageProductDetails from "./ManageProductDetails";

const ManageProducts = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://secure-beach-51021.herokuapp.com/service`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [service]);
  return (
    <div>
      <h1 className="text-4xl mx-20 font-bold text-center my-9">
        Manage Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 gap-36 mx-auto">
        {service.map((services) => (
          <ManageProductDetails services={services}></ManageProductDetails>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
