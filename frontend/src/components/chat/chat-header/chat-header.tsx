import { TUser } from "@features/types";
import styles from "./styles.scss";
import MoreHorizontalIcon from "@assets/svg/more-horizontal.svg";
import PhoneIcon from "@assets/svg/phone.svg";
import SearchIcon from "@assets/svg/search.svg";
import cn from "classnames";
import { SUBSCRIBE_ONLINE_USER } from "@schemas";
import { useSubscription } from "@apollo/client";
import { useState } from "react";

type TProps = {
  reciever?: TUser;
};

export const ChatHeader = ({ reciever }: TProps) => {
  const [isOnline, setIsOnline] = useState(false);

  useSubscription(SUBSCRIBE_ONLINE_USER, {
    onSubscriptionData: ({
      subscriptionData: {
        data: { userOnline },
      },
    }) => {
      if (userOnline.id === reciever?.id) {
        setIsOnline(userOnline.online);
      }
    },
  });

  const online = isOnline || reciever?.online;

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
        <span
          className={cn(styles.status, {
            [styles.online]: online,
            [styles.offline]: !online,
          })}
        >
          {online ? "Online" : "Offline"}
        </span>
      </div>
      <div className={styles.actions}>
        <SearchIcon />
        <PhoneIcon />
        <MoreHorizontalIcon />
      </div>
    </div>
  );
};
