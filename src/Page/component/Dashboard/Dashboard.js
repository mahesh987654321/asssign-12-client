import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import UserAdmin from "./UserAdmin";
import auth from "../../../firebaseinit";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UserAdmin(user);
  console.log(admin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-slate-300 text-base-content">
            <li>
              {!admin && (
                <Link style={{ textDecoration: "none" }} to="/dashboard/order">
                  My Orders
                </Link>
              )}
            </li>
            <li>
              {!admin && (
                <Link style={{ textDecoration: "none" }} to="/dashboard/review">
                  My Review
                </Link>
              )}
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/dashboard/profile">
                My Profile
              </Link>
            </li>
            <li>
              {admin && (
                <Link style={{ textDecoration: "none" }} to="/dashboard/users">
                  Make Admin
                </Link>
              )}
            </li>
            <li>
              {admin && (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/manageProduct"
                >
                  Manage Products
                </Link>
              )}
            </li>
            <li>
              {admin && (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/addProduct"
                >
                  Add Products
                </Link>
              )}
            </li>
            <li>
              {admin && (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/manageOrder"
                >
                  Manage Orders
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
