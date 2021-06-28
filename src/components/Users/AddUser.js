import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState(""); using refs below instead of state for inputs
  // const [userAge, setUserAge] = useState("");
  const [userError, setUserError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setUserError({
        title: "No entries",
        message: "Please ensure both entries are complete.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setUserError({
        title: "Age too low",
        message: "Please ensure age is greater than or equat to 1.",
      });
      return;
    }

    onAddUser({
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    });
    // setUserName(""); not using state anymore but refs
    // setUserAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const onNameChangeHandler = (event) => { dont need event handler for refs
  //   setUserName(event.target.value);
  // };

  // const onAgeChangeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };
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
            // onChange={onNameChangeHandler}
            // value={userName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={onAgeChangeHandler}
            // value={userAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
