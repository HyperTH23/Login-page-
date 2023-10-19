import { memo } from "react";
import LoginInterfaceSub from "./LoginInterfaceSub";
import AgriSmartLogo from "./AgriSmartLogo";
import styles from "./LoginPageInterface.module.css";

const LoginPageInterface = memo(() => {
  return (
    <main className={styles.loginPageInterface}>
      <LoginInterfaceSub />
      <AgriSmartLogo />
    </main>
  );
});

export default LoginPageInterface;
