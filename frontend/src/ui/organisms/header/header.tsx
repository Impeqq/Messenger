import styles from "./styles.scss";
import ArrowDown from "@assets/svg/arrow-down.svg";
import { Avatar } from "@ui";
import { routePath } from "@pages/routes";
import { Link, useHistory } from "react-router-dom";
import LogoutIcon from "@assets/svg/logout.svg";
import PersonIcon from "@assets/svg/person.svg";
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { AUTH_TOKEN } from "@features/constants";
import { useLocalStorage } from "@features/hooks";
import { getImage } from "@features/helpers/getImage";

type TProps = {
  firstName?: string;
  lastName?: string;
  avatarId?: string;
};

export const Header = ({ firstName, lastName, avatarId }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { removeItem } = useLocalStorage();

  const history = useHistory();

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
      <div className={styles.container}>
        <Link to={routePath.main.path} className={styles.logo}>
          Messenger 💬
        </Link>
        {firstName && lastName && (
          <>
            <div className={styles.userInfo} onClick={toggleOpen}>
              <Avatar image={getImage(avatarId)} alt="Avatar" />
              <div className={styles.info}>
                <span>
                  {firstName} {lastName}
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
