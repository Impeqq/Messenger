import { Header } from "@ui";
import { Sidebar } from "@components";
import styles from "./styles.scss";
import cn from "classnames";
import { useLocalStorage } from "@features/hooks";
import { AUTH_TOKEN } from "@features/constants";
import { useState } from "react";

export const Main: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const { getItem } = useLocalStorage();

  const isGuest = !getItem(AUTH_TOKEN);

  const toggleSidebar = () => {
    !isGuest && setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <Header
        isGuest={isGuest}
        toggleSidebar={toggleSidebar}
        isOpenSidebar={isOpenSidebar}
      />
      <div className={cn(styles.flex, { [styles.guest]: isGuest })}>
        {!isGuest && (
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            toggleSidebar={toggleSidebar}
          />
        )}
        {children}
      </div>
    </>
  );
};
