import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  // console.log(role);
  const makeAdmin = (event) => {
    fetch(`https://secure-beach-51021.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast("Failed to make admin");
          res.json();
          return;
        }
      })
      .then((data) => {
        refetch();

        toast("Successfully made a admin");

        console.log(data);
      });
  };
  return (
    <tr>
      <ToastContainer />
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                alt="No Image"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm btn-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="text-white rounded btn-sm bg-red-700">
          Remove user
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
