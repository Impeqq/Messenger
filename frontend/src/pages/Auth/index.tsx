import styles from "./styles.scss";
import LoginBlock from "./login-block/login-block";
import { RegisterBlock } from "./register-block";
import MobileImages from "./mobile-images/mobile-images";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "@features/hooks";
import { AUTH_TOKEN } from "@features/constants";
import { routePath } from "@pages/routes";

const Auth = () => {
  const { getItem } = useLocalStorage();
  const history = useHistory();
  const isGuest = !getItem(AUTH_TOKEN);

  useEffect(() => {
    if (!isGuest) {
      history.push(routePath.main.path);
    }
  }, [isGuest, history]);

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
