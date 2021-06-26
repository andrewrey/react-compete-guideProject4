import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      console.log("age too low");
      return;
    }

    onAddUser({ name: userName, age: userAge, id: Math.random().toString() });
    setUserName("");
    setUserAge("");
  };

  const onNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="name"
          type="text"
          onChange={onNameChangeHandler}
          value={userName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={onAgeChangeHandler}
          value={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
