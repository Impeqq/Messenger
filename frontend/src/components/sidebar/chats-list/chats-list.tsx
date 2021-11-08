import { useState } from "react";
import styles from "./styles.scss";
import { SiebarItem, UserItem, UserLocations } from "@ui";
import Avatar1 from "@assets/images/avatar1.png";
import { useQuery, useSubscription } from "@apollo/client";
import { FETCH_ME, FETCH_MY_CHATS, SUBSCRIBE_MY_CHAT } from "@schemas";
import { TChat, TUser } from "@features/types";
import { useHistory } from "react-router-dom";
import { routePath } from "@pages/routes";

export const ChatsList = () => {
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
      if (_chat.messages[0].read) {
        const newChats = chats.map((chat) => {
          if (chat.id === _chat.id) {
            return _chat;
          }
          return chat;
        });
        setChats(newChats);
      } else {
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
    <SiebarItem title={"My chats"}>
      {chats.length === 0 && !loading && (
        <span className={styles.notChats}>
          You do not have chats, start chatting with someone right now! Find
          friends through search
        </span>
      )}
      {chats?.map((chat: TChat) => {
        const data = {
          user: chat.users.filter((user: TUser) => user.id !== me?.id)[0],
          date: chat.messages[0]?.createdAt,
          message: chat.messages[0]?.message,
          isMessageFromMe: chat.messages[0]?.user_from.id === me?.id,
          read: chat.messages[0]?.read,
        };

        return (
          <UserItem
            key={chat.id}
            className={styles.userItem}
            isOnline={true}
            handleRoute={handleClick}
            currentUser={me}
            type={UserLocations.SIDEBAR}
            avatar={Avatar1}
            {...data}
            chat={chat}
          />
        );
      })}
    </SiebarItem>
  );
};
