import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addedUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    <>
      <AddUser onAddUser={addedUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
