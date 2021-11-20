import styles from "./styles.scss";
import ArrowDown from "@assets/svg/arrow-down.svg";
import { Avatar, Logo } from "@ui";
import { routePath } from "@pages/routes";
import { useHistory } from "react-router-dom";
import LogoutIcon from "@assets/svg/logout.svg";
import PersonIcon from "@assets/svg/person.svg";
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { AUTH_TOKEN, SOCKET_API } from "@features/constants";
import { useLocalStorage } from "@features/hooks";
import { getImage } from "@features/helpers/getImage";
import { TUser } from "@features/types";
import { io } from "socket.io-client";
import { useLazyQuery } from "@apollo/client";
import { FETCH_ME } from "@schemas";

type TProps = {
  isGuest: boolean;
  toggleSidebar: () => void;
  isOpenSidebar: boolean;
};

export const Header = ({ isGuest, toggleSidebar, isOpenSidebar }: TProps) => {
  const [me, setMe] = useState<null | TUser>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { removeItem, getItem } = useLocalStorage();
  const history = useHistory();

  const isChanges = getItem(AUTH_TOKEN);

  const [fetchMe] = useLazyQuery(FETCH_ME, {
    fetchPolicy: "network-only",
    onCompleted: ({ me }) => setMe(me),
    onError: () => {
      setMe(null);
      history.push(routePath.auth.path);
    },
  });

  useEffect(() => {
    if (me?.id) io(`https://${SOCKET_API}?user_id=${me?.id}`);
  }, [me]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe, isChanges, history, isGuest]);

  useEffect(() => {
    const onClick: any = (e: React.MouseEvent) => {
      if (!(ref?.current as any)?.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
      return {} as EventListener;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    history.push(routePath.auth.path);
    toggleOpen();
    removeItem(AUTH_TOKEN);
  };

  const handleProfile = () => {
    toggleOpen();
    history.push(routePath.profile.path);
  };

  return (
    <div className={styles.header}>
      <div className={cn(styles.container, { [styles.active]: isOpenSidebar })}>
        <div>
          <div className={styles.burger} onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Logo />
        </div>
        {!isGuest && (
          <>
            <div className={styles.userInfo} onClick={toggleOpen}>
              <Avatar image={getImage(me?.avatar?.id)} alt="Avatar" />
              <div className={styles.info}>
                <span>
                  {me?.firstName} {me?.lastName}
                </span>
                <span>Online</span>
              </div>
              <div className={cn(styles.arrow, { [styles.active]: isOpen })}>
                <ArrowDown />
              </div>
            </div>
            {isOpen && (
              <div className={styles.profileNav} ref={ref}>
                <div className={styles.profileNavItem} onClick={handleProfile}>
                  <PersonIcon />
                  <span>Profile</span>
                </div>
                <div className={styles.profileNavItem} onClick={handleLogout}>
                  <LogoutIcon />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
