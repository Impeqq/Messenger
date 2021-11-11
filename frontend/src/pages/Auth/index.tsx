import styles from "./styles.scss";
import LoginBlock from "./login-block/login-block";
import { RegisterBlock } from "./register-block";
import MobileImages from "./mobile-images/mobile-images";

const Auth = () => {
  return (
    <>
      <MobileImages />
      <div className={styles.authBlock}>
        <LoginBlock />
        <RegisterBlock />
      </div>
    </>
  );
};

export default Auth;
