import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USER = [
    {
      id: 1,
      name: "roshan",
      places: 4,
      image: "https://picsum.photos/200",
    },
  ];
  return <UsersList items={USER} />;
}

export default Users;
