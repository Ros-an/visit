import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USER = [
    {
      id: 1,
      name: "roshan",
      places: 4,
      image:
        "https://images.unsplash.com/photo-1619092738159-9801f5f07cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ];
  return <UsersList items={USER} />;
}

export default Users;
