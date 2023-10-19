import { memo } from "react";
import styles from "./LoginButton.module.css";

const LoginButton = memo(() => {
  return (
    <button className={styles.loginButton}>
      <div className={styles.loginButton1}>
        <div className={styles.loginButtonChild} />
        <button className={styles.login}>Login</button>
      </div>
    </button>
  );
});

export default LoginButton;
