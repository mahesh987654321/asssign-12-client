import axios from "axios";
import { useEffect, useState } from "react";

const Hooks = () => {
  const [ordered, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://secure-beach-51021.herokuapp.com/create-payment-intent`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [ordered]);
  return [ordered];
};
export default Hooks;

// import { useEffect, useState } from "react";

// const useServices = () =>{
//     const [services, setServices] = useState([]);

//     useEffect( ()=>{
//         fetch('http://localhost:5000/service')
//         .then(res => res.json())
//         .then(data => setServices(data));
//     }, []);
//     return [services, setServices]
// }

// export default useServices;
