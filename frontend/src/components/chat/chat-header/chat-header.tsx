import { TUser } from "@features/types";
import styles from "./styles.scss";
import MoreHorizontalIcon from "@assets/svg/more-horizontal.svg";
import PhoneIcon from "@assets/svg/phone.svg";
import SearchIcon from "@assets/svg/search.svg";
import { Avatar } from "@ui";
import Avatar1 from "@assets/images/avatar3.png";
import Avatar2 from "@assets/images/avatar3.png";
import Avatar3 from "@assets/images/avatar3.png";
type TProps = {
  reciever?: TUser;
};

export const ChatHeader = ({ reciever }: TProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.members}>
        {/* <Avatar image={Avatar1} alt="Avatar" />
        <Avatar image={Avatar2} alt="Avatar" />
        <Avatar image={Avatar3} alt="Avatar" />
        <div className={styles.circle} /> */}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>
          {reciever ? `${reciever?.firstName} ${reciever?.lastName}` : ""}
        </span>
        <span className={styles.time}>last seen 34 minutes ago</span>
      </div>
      <div className={styles.actions}>
        <SearchIcon />
        <PhoneIcon />
        <MoreHorizontalIcon />
      </div>
    </div>
  );
};
