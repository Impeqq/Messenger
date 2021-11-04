import { FunctionComponent, SVGAttributes } from "react";
import styles from "./styles.scss";
import cn from "classnames";
import { Avatar, Badge } from "@ui";
import { DateTime } from "@components";
import { TUser } from "@features/types";

type TProps = {
  avatar: string;
  message?: string;
  className?: string;
  isOnline?: boolean;
  date?: string;
  notifications?: number;
  type: UserLocations;
  RightIcon?: FunctionComponent<SVGAttributes<SVGElement>>;
  handleCreate?: (id: string) => void;
  handleRoute?: (id: string) => void;
  user?: TUser;
  currentUser?: TUser;
  isMessageFromMe?: boolean;
  chat?: any;
};

export enum UserLocations {
  CHAT = "chat",
  SIDEBAR = "sidebar",
}

export const UserItem = ({
  avatar,
  message = "",
  className,
  isOnline = false,
  date,
  notifications = 0,
  type,
  RightIcon,
  handleCreate,
  handleRoute,
  user,
  chat,
  currentUser,
  isMessageFromMe = false,
}: TProps) => {
  const isSelf = currentUser?.id === user?.id;

  const handleClick = () => {
    handleCreate && handleCreate(user?.id || "");
    handleRoute && handleRoute(chat?.id || "");
  };

  return (
    <div className={cn(className, styles.userItem)} onClick={handleClick}>
      <Avatar image={avatar} alt={"Avatar"} isOnline={isOnline} />
      <div className={styles.info}>
        <span className={styles.title}>
          {isSelf ? "You" : `${user?.firstName} ${user?.lastName}`}
          {date && type === UserLocations.CHAT && <DateTime date={date} />}
        </span>
        <span className={styles.message}>
          {isMessageFromMe ? <b>You: </b> : ""} {message}
        </span>
      </div>
      <div>
        {date && type === UserLocations.SIDEBAR && <DateTime date={date} />}
        {notifications !== 0 && <Badge number={notifications} />}
        {RightIcon && <RightIcon width={30} height={25} />}
      </div>
    </div>
  );
};
