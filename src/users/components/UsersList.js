import React from "react";
import UserItem from "./UserItem";
import "./userslist.css";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No users found.</div>;
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          placeCount={user.places}
          image={user.image}
        />
      ))}
    </ul>
  );
}

export default UsersList;
