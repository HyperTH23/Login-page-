import { memo } from "react";
import styles from "./AgriSmartLogo.module.css";

const AgriSmartLogo = memo(() => {
  return (
    <div className={styles.agrismartLogo}>
      <div className={styles.agrismartLogo2}>
        <h3 className={styles.fromSoilToContainer}>
          <span>{`"From `}</span>
          <span className={styles.soil}>Soil</span>
          <span>{` to `}</span>
          <span className={styles.screen}>Screen</span>
          <span>: Your Farm's Command Center"</span>
        </h3>
        <img className={styles.logoPart2} alt="" src="/logo-part-21.svg" />
        <img className={styles.logoPart1} alt="" src="/logo-part-11.svg" />
      </div>
      <div className={styles.agrismartLogo1}>
        <h1 className={styles.agrismart}>AgriSmart</h1>
        <img className={styles.logoPart3} alt="" src="/logo-part-31.svg" />
        <img className={styles.logoPart4} alt="" src="/logo-part-41.svg" />
      </div>
    </div>
  );
});

export default AgriSmartLogo;
