import { Header } from "@ui";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";
import { Sidebar } from "@components";
import styles from "./styles.scss";
import cn from "classnames";
import { useEffect } from "react";
import { useLocalStorage } from "@features/hooks";
import { AUTH_TOKEN } from "@features/constants";

export const Main: React.FC = ({ children }) => {
  const history = useHistory();
  const { getItem } = useLocalStorage();

  const isGuest = !getItem(AUTH_TOKEN);

  useEffect(() => {
    if (!isGuest) {
      history.push(routePath.main.path);
    }
  }, [isGuest, history]);

  return (
    <>
      <Header isGuest={isGuest} />
      <div className={cn(styles.flex, { [styles.guest]: isGuest })}>
        {!isGuest && <Sidebar />}
        {children}
      </div>
    </>
  );
};
