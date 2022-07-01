import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { getUsers, singleUser } from "../store/slices/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  console.log("users ::", users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        dispatch(getUsers({ data: res.data, error: false }));
      } catch (err) {
        dispatch(getUsers({ data: [], error: true }));
        console.log("Users data fetching err ::", err);
      }
    };

    fetchData();
  }, []);

  if (users?.isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        padding: "20px",
        color: "white",
        minHeight: "100px",
      }}
    >
      {users?.data.length > 0 ? (
        users?.data.map((user) => (
          <div
            key={user?.id}
            style={{
              width: "65%",
              margin: "10px auto",
              border: "1px dotted salmon",
              padding: "20px",
            }}
          >
            <h2>Name : {user?.name} </h2>
            <h3>Company : {user?.company?.name} </h3>
            <h3>Contact : {user?.phone} </h3>
            <button
              onClick={() => {
                console.log("dispatch handler ");
                dispatch(singleUser(user?.id));
              }}
            >
              Show Details
            </button>
          </div>
        ))
      ) : (
        <h4>No User Found</h4>
      )}
    </div>
  );
};

export default Users;
