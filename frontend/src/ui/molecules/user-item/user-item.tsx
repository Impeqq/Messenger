import { FunctionComponent, SVGAttributes } from "react";
import styles from "./styles.scss";
import cn from "classnames";
import { Avatar, ReadCheck } from "@ui";
import { DateTime } from "@components";
import { TUser } from "@features/types";
import Avatar1 from "@assets/images/avatar1.png";
import { API } from "@features/constants";

type TProps = {
  message?: string;
  className?: string;
  isOnline?: boolean;
  date?: string;
  type: UserLocations;
  RightIcon?: FunctionComponent<SVGAttributes<SVGElement>>;
  handleCreate?: (id: string) => void;
  handleRoute?: (id: string) => void;
  user?: TUser;
  currentUser?: TUser;
  isMessageFromMe?: boolean;
  chat?: any;
  read?: boolean;
};

export enum UserLocations {
  CHAT = "chat",
  SIDEBAR = "sidebar",
}

export const UserItem = ({
  message = "",
  className,
  isOnline = false,
  date,
  type,
  RightIcon,
  handleCreate,
  handleRoute,
  user,
  chat,
  currentUser,
  isMessageFromMe = false,
  read,
}: TProps) => {
  const isSelf = currentUser?.id === user?.id;

  const handleClick = () => {
    handleCreate && handleCreate(user?.id || "");
    handleRoute && handleRoute(chat?.id || "");
  };

  const avatar = user?.avatar
    ? `http://${API}/file/${user.avatar.id}`
    : Avatar1;

  return (
    <div className={cn(className, styles.userItem)} onClick={handleClick}>
      <Avatar image={avatar} alt={"Avatar"} isOnline={isOnline} />
      <div className={styles.info}>
        <span className={styles.title}>
          {isSelf ? "You" : `${user?.firstName} ${user?.lastName}`}
          {date && type === UserLocations.CHAT && (
            <>
              <DateTime date={date} />
              {isSelf && <ReadCheck read={read} />}
            </>
          )}
        </span>
        <span className={styles.message}>
          {isMessageFromMe ? <b>You: </b> : ""} {message}
        </span>
      </div>
      <div className={styles.sidebarDate}>
        {date && type === UserLocations.SIDEBAR && (
          <>
            <ReadCheck read={read} />
            <DateTime date={date} />
          </>
        )}
        {RightIcon && <RightIcon width={30} height={25} />}
      </div>
    </div>
  );
};
