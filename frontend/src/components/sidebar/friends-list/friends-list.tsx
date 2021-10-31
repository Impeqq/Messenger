import React, { useEffect, useState } from "react";
import ArrowTop from "@assets/svg/arrow-top.svg";
import styles from "./styles.scss";
import { UserItem, UserLocations } from "@ui";
import Avatar1 from "@assets/images/avatar1.png";
import Avatar2 from "@assets/images/avatar2.png";
import Avatar3 from "@assets/images/avatar3.png";
import Avatar4 from "@assets/images/avatar4.png";
import Avatar5 from "@assets/images/avatar5.png";
import AddFriendIcon from "@assets/svg/add-friend.svg";
import { useLazyQuery, useQuery, useSubscription } from "@apollo/client";
import { FETCH_ME, FETCH_MY_CHATS, SUBSCRIBE_MY_CHAT } from "@schemas";
import { TChat, TUser } from "@features/types";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";

export const FriendsList = () => {
  const [chats, setChats] = useState<TChat[]>([]);
  const { data: userData } = useQuery(FETCH_ME, { fetchPolicy: "cache-only" });
  const { loading } = useQuery(FETCH_MY_CHATS, {
    onCompleted: ({ getMyChats: data }: { getMyChats: TChat[] }) => {
      setChats(data);
    },
  });

  useSubscription(SUBSCRIBE_MY_CHAT, {
    variables: { user_id: userData?.me?.id },
    onSubscriptionData: ({ subscriptionData: { data } }: any) => {
      if (data.chatUpdated) {
        const chatUpdated: TChat = data.chatUpdated;
        const tempChats: TChat[] = [
          { ...chatUpdated },
          ...chats.filter((chat) => chat.id !== chatUpdated.id),
        ];
        setChats(tempChats);
      }
    },
  });

  const history = useHistory();

  const handleClick = (id: string) => {
    history.push(`${routePath.chat.path}/${id}`);
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <div className={styles.header}>
        <span>My chats</span>
        <ArrowTop />
      </div>
      <div className={styles.friendsList}>
        {chats?.map((item: TChat) => {
          const user = item.users.filter(
            (user: TUser) => user.id !== userData?.me?.id
          )[0];

          const message = item.messages[0]?.message;
          const isMessageFromMe =
            item.messages[0]?.user_from?.id === userData?.me?.id;

          return (
            <UserItem
              className={styles.userItem}
              isOnline={true}
              // notifications={4}
              handleRoute={handleClick}
              type={UserLocations.SIDEBAR}
              avatar={Avatar3}
              user={user}
              chat={item}
              isMessageFromMe={isMessageFromMe}
              message={message}
            />
          );
        })}
      </div>
      <button className={styles.button}>
        <AddFriendIcon />
        Add Friends
      </button>
    </div>
  );
};
