import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userError, setUserError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setUserError({
        title: "No entries",
        message: "Please ensure both entries are complete.",
      });
      return;
    }
    if (+userAge < 1) {
      setUserError({
        title: "Age too low",
        message: "Please ensure age is greater than or equat to 1.",
      });
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
  const closeModalHandler = () => {
    setUserError(undefined);
  };

  return (
    <Wrapper>
      {userError && (
        <Modal
          title={userError.title}
          message={userError.message}
          onClose={closeModalHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
