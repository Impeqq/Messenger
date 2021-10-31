import React from "react";
import { Guest } from "@ui";
import styles from "./styles.scss";
import LoginBlock from "./login-block/login-block";
import { RegisterBlock } from "./register-block";
import MobileImages from "./mobile-images/mobile-images";

const Auth = () => {
  return (
    <Guest className={styles.main}>
      <MobileImages />
      <div className={styles.authBlock}>
        <LoginBlock />
        <RegisterBlock />
      </div>
    </Guest>
  );
};

export default Auth;
