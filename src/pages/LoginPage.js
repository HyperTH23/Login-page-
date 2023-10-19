import LoginForm from "../components/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <main className={styles.loginPageInterface}>
        <LoginForm />
        <div className={styles.agrismartLogo}>
          <div className={styles.agrismartLogo2}>
            <h3 className={styles.fromSoilToContainer}>
              <span>{`"From `}</span>
              <span className={styles.soil}>Soil</span>
              <span>{` to `}</span>
              <span className={styles.screen}>Screen</span>
              <span>: Your Farm's Command Center"</span>
            </h3>
            <img className={styles.logoPart2} alt="" src="/logo-part-2.svg" />
            <img className={styles.logoPart1} alt="" src="/logo-part-1.svg" />
          </div>
          <div className={styles.agrismartLogo1}>
            <h1 className={styles.agrismart}>AgriSmart</h1>
            <img className={styles.logoPart3} alt="" src="/logo-part-3.svg" />
            <img className={styles.logoPart4} alt="" src="/logo-part-4.svg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
