import React, { useEffect, useState } from "react";
import ToolsDetails from "./ToolsDetails";
import { useNavigate } from "react-router-dom";
const Tools = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://secure-beach-51021.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const navigate = useNavigate();
  const handecClick = (event) => {
    navigate("/all");
  };
  return (
    <>
      <div>
        <h1 className="text-4xl mx-20 font-bold text-center">Tools</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 gap-10 mx-auto">
          {service.slice(-6).map((services) => (
            <ToolsDetails services={services}></ToolsDetails>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={handecClick} className="bg-primary p-3 pl-4 w-52 mt-5">
          SEE ALL
        </button>
      </div>
    </>
  );
};

export default Tools;
