import { memo } from "react";
import styles from "./SignUpButton.module.css";

const SignUpButton = memo(() => {
  return (
    <button className={styles.signUpButton}>
      <div className={styles.signUpButton1}>
        <button className={styles.signUpButtonChild} />
        <div className={styles.signUp}>Sign Up</div>
      </div>
    </button>
  );
});

export default SignUpButton;
