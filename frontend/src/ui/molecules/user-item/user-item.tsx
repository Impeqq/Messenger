import { FunctionComponent, SVGAttributes, useState } from "react";
import styles from "./styles.scss";
import cn from "classnames";
import { Avatar, ReadCheck } from "@ui";
import { DateTime } from "@components";
import { TUser } from "@features/types";
import { getImage } from "@features/helpers/getImage";
import { useSubscription } from "@apollo/client";
import { SUBSCRIBE_ONLINE_USER } from "@schemas";

type TProps = {
  message?: string;
  className?: string;
  date?: string;
  type: UserLocations;
  RightIcon?: FunctionComponent<SVGAttributes<SVGElement>>;
  handleCreate?: (id: string) => void;
  handleRoute?: (id: string) => void;
  user?: Omit<TUser, "email">;
  currentUser?: Omit<TUser, "email">;
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
  const [isOnline, setIsOnline] = useState(user?.online);
  const isSelf = currentUser?.id === user?.id;

  const handleClick = () => {
    handleCreate && handleCreate(user?.id || "");
    handleRoute && handleRoute(chat?.id || "");
  };

  useSubscription(SUBSCRIBE_ONLINE_USER, {
    onSubscriptionData: ({
      subscriptionData: {
        data: { userOnline },
      },
    }) => {
      if (type === UserLocations.SIDEBAR && userOnline.id === user?.id) {
        setIsOnline(userOnline.online);
      }
    },
  });

  const online = type === UserLocations.CHAT ? false : isOnline;

  return (
    <div
      className={cn(className, styles.userItem, {
        [styles.wrap]: type === UserLocations.SIDEBAR,
      })}
      onClick={handleClick}
    >
      <Avatar
        image={getImage(user?.avatar?.id)}
        alt={"Avatar"}
        isOnline={online}
      />
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
