import React, { useEffect, useState } from "react";
import AllDetails from "./AllDetails";

const All = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch(`https://secure-beach-51021.herokuapp.com/service`)
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, [all]);
  return (
    <div>
      <p className="flex justify-center text-3xl font-bold text-primary">
        All Products
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-9/12 mx-auto mt-5">
        {all.map((service) => (
          <AllDetails service={service}></AllDetails>
        ))}
      </div>
    </div>
  );
};

export default All;
