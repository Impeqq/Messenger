import styles from "./styles.scss";
import Avatar1 from "@assets/images/avatar1.png";
import ArrowDown from "@assets/svg/arrow-down.svg";
import { Avatar } from "@ui";
import { routePath } from "@pages/routes";
import { Link, useHistory } from "react-router-dom";
import LogoutIcon from "@assets/svg/logout.svg";
import PersonIcon from "@assets/svg/person.svg";
import { useState } from "react";
import cn from "classnames";
import { AUTH_TOKEN } from "@features/constants";

type TProps = {
  firstName?: string;
  lastName?: string;
};

export const Header = ({ firstName, lastName }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    // Reload page to reset all cache
    window.location.reload();
  };

  const handleProfile = () => {
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
              <Avatar image={Avatar1} alt="Avatar" notifications={6} />
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
              <div className={styles.profileNav}>
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
