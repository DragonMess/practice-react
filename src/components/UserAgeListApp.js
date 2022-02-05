import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function UserAgeListApp() {
  const [usersList, setUserList] = useState([]);
  const handleAddUser = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          username: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default UserAgeListApp;
