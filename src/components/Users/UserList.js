import Card from "../UI/Card";
import ListItem from "./ListItem";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <ListItem name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
