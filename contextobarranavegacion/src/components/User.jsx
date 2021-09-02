import { useContext } from "react";
import { AppContext } from "../context";
import styles from "../components/User.module.css";

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  return (
    <div className={styles.colornav}>
      <h3>Hi {user.name} !</h3>
    </div>
  );
};

export default User;
