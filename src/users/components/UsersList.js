import React from "react";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No users found.</div>;
  }
  return (
    <ul>
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
