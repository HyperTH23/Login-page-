import { memo, useCallback, useEffect } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = memo(() => {
  const onLoginButtonClick = useCallback(() => {
    // Please sync "Farm Details Page" to the project
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.loginInterfaceSub}>
      <div className={styles.loginInterfaceSubChild} />
      <h1 className={styles.welcomeBack}>Welcome Back</h1>
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <img
          className={styles.createAccountButton}
          alt=""
          src="/create-account-button.svg"
        />
      </button>
      <div className={styles.password}>
        <div className={styles.password1}>Password</div>
        <input className={styles.passwordChild} type="text" />
        <div className={styles.password2}>
          <div className={styles.passwordItem} />
          <div className={styles.passwordInner} />
        </div>
      </div>
      <div className={styles.email} data-animate-on-scroll>
        <div className={styles.password1}>Email</div>
        <div className={styles.email2}>
          <input className={styles.emailChild} type="text" />
          <div className={styles.passwordItem} />
        </div>
      </div>
      <button className={styles.signUpButton}>
        <div className={styles.signUpButton1}>
          <div className={styles.signUpButtonChild} />
          <div className={styles.signUp}>Sign Up</div>
        </div>
      </button>
      <button className={styles.loginButton1}>
        <div className={styles.loginButton2}>
          <div className={styles.loginButtonChild} />
          <div className={styles.login}>Login</div>
        </div>
      </button>
    </div>
  );
});

export default LoginForm;
