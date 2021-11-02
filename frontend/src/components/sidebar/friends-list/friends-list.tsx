import { useState } from "react";
import ArrowTop from "@assets/svg/arrow-top.svg";
import styles from "./styles.scss";
import { UserItem, UserLocations } from "@ui";
import Avatar3 from "@assets/images/avatar3.png";
import AddFriendIcon from "@assets/svg/add-friend.svg";
import { useQuery, useSubscription } from "@apollo/client";
import { FETCH_ME, FETCH_MY_CHATS, SUBSCRIBE_MY_CHAT } from "@schemas";
import { TChat, TUser } from "@features/types";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";

export const FriendsList = () => {
  const [chats, setChats] = useState<TChat[]>([]);

  const { data: userData } = useQuery(FETCH_ME, { fetchPolicy: "cache-only" });
  const me = userData?.me;

  const history = useHistory();

  const { loading } = useQuery(FETCH_MY_CHATS, {
    onCompleted: ({ getMyChats: data }) => {
      setChats(data);
    },
  });

  useSubscription(SUBSCRIBE_MY_CHAT, {
    variables: { user_id: me?.id },
    onSubscriptionData: ({
      subscriptionData: {
        data: { chatUpdated: _chat },
      },
    }) => {
      if (_chat) {
        setChats([
          { ..._chat },
          ...chats.filter((chat) => chat.id !== _chat.id),
        ]);
      }
    },
  });

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
        {chats?.map((chat: TChat) => {
          const data = {
            user: chat.users.filter((user: TUser) => user.id !== me?.id)[0],
            date: chat.messages[0]?.createdAt,
            message: chat.messages[0]?.message,
            isMessageFromMe: chat.messages[0]?.user_from.id === me?.id,
          };

          return (
            <UserItem
              className={styles.userItem}
              isOnline={true}
              // notifications={4}
              handleRoute={handleClick}
              currentUser={me}
              type={UserLocations.SIDEBAR}
              avatar={Avatar3}
              {...data}
              chat={chat}
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
