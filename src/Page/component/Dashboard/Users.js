import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";
const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://secure-beach-51021.herokuapp.com/users").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-primary my-7 text-center">All Admin</h1>
      <p className="text-center text-2xl text-secondary">
        Total Admin is: {users.length}
      </p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Picture</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
