import styles from "./styles.scss";
import Avatar8 from "@assets/images/avatar8.png";
import ArrowDown from "@assets/svg/arrow-down.svg";
import { Avatar } from "@ui";
import { routePath } from "@pages/routes";
import { Link } from "react-router-dom";

type TProps = {
  firstName?: string;
  lastName?: string;
};

export const Header = ({ firstName, lastName }: TProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={routePath.main.path} className={styles.logo}>
          Messenger 💬
        </Link>
        {firstName && lastName && (
          <div className={styles.userInfo}>
            <Avatar image={Avatar8} alt="Avatar" notifications={6} />
            <div className={styles.info}>
              <span>
                {firstName} {lastName}
              </span>
              <span>Online</span>
            </div>
            <div className={styles.arrow}>
              <ArrowDown />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
