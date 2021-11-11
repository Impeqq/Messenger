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
import { API, AUTH_TOKEN } from "@features/constants";
import { useLocalStorage } from "@features/hooks";

type TProps = {
  firstName?: string;
  lastName?: string;
  avatarId?: string;
};

export const Header = ({ firstName, lastName, avatarId }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { removeItem } = useLocalStorage();

  const history = useHistory();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    removeItem(AUTH_TOKEN);
    history.push(routePath.auth.path);
  };

  const handleProfile = () => {
    history.push(routePath.profile.path);
  };

  const avatar = avatarId ? `http://${API}/file/${avatarId}` : Avatar1;

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={routePath.main.path} className={styles.logo}>
          Messenger 💬
        </Link>
        {firstName && lastName && (
          <>
            <div className={styles.userInfo} onClick={toggleOpen}>
              <Avatar image={avatar} alt="Avatar" notifications={6} />
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
