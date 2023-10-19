import { memo, useCallback } from "react";
import CreateAccount from "./CreateAccount";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import styles from "./LoginInterfaceSub.module.css";

const LoginInterfaceSub = memo(() => {
  const navigate = useNavigate();

  const onCreateAccountButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginInterfaceSub}>
      <div className={styles.loginInterfaceSubChild} />
      <CreateAccount />
      <button
        className={styles.createAccountButton}
        onClick={onCreateAccountButtonClick}
      >
        <img
          className={styles.createAccountButton1}
          alt=""
          src="/create-account-button1.svg"
        />
      </button>
      <div className={styles.password}>
        <div className={styles.password1}>Password</div>
        <div className={styles.password2}>
          <img className={styles.passwordChild} alt="" src="/rectangle-4.svg" />
          <input
            className={styles.password3}
            placeholder="Password"
            type="text"
          />
        </div>
      </div>
      <div className={styles.email}>
        <div className={styles.password1}>Email</div>
        <div className={styles.password2}>
          <img className={styles.passwordChild} alt="" src="/rectangle-4.svg" />
          <input className={styles.password3} placeholder="Email" type="text" />
        </div>
      </div>
      <div className={styles.lastName}>
        <div className={styles.password1}>Last Name</div>
        <div className={styles.password2}>
          <img className={styles.passwordChild} alt="" src="/rectangle-4.svg" />
          <input
            className={styles.password3}
            placeholder="Last Name"
            type="text"
          />
        </div>
      </div>
      <textarea
        className={styles.firstName}
        placeholder="First Name"
        defaultValue="First Name"
      />
      <LoginButton />
      <SignUpButton />
    </div>
  );
});

export default LoginInterfaceSub;
