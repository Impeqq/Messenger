import { useEffect, useState } from "react";
import styles from "./styles.scss";
import Avatar3 from "@assets/images/avatar3.png";
import { Typing } from "./typing";
import { UserItem, UserLocations } from "@ui";
import { FETCH_CHAT, FETCH_ME, SUBSCRIBE_CHAT } from "@schemas";
import { useQuery, useSubscription } from "@apollo/client";
import { useParams } from "react-router-dom";
import { RouteParams, TMessage, TUser } from "@features/types";
import { ChatHeader } from "./chat-header";

const OFFSET = 15;

export const Chat = () => {
  const { data: userData } = useQuery(FETCH_ME, { fetchPolicy: "cache-only" });
  const [offset, setOffset] = useState<number>(0);
  const [hasMessages, setHasMessages] = useState<boolean>(true);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [reciever, setReciever] = useState<TUser>();
  const me = userData?.me;
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    setOffset(0);
    setMessages([]);
    setHasMessages(true);
  }, [id]);

  useQuery(FETCH_CHAT, {
    fetchPolicy: "no-cache",
    variables: {
      id,
      offset,
    },
    onCompleted: ({ getChat: { users, messages: _messages } }) => {
      const reciever = users.filter((user: TUser) => user.id !== me?.id);
      setReciever(reciever[0]);
      messages.length && setHasMessages(false);
      setMessages([...messages, ...(_messages || {})]);
    },
  });
  useSubscription(SUBSCRIBE_CHAT, {
    variables: { chat_id: id },
    onSubscriptionData: ({
      subscriptionData: {
        data: { messageSent },
      },
    }) => {
      setMessages([messageSent, ...messages]);
    },
  });

  const handleScroll = (e: any) => {
    const isTop =
      e.target.scrollHeight - e.target.offsetHeight ===
      Math.abs(e.target.scrollTop);
    if (isTop && hasMessages && e.target.scrollTop !== 0) {
      setOffset(offset + OFFSET);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        <ChatHeader reciever={reciever} />
        <div className={styles.messages} onScroll={handleScroll}>
          {messages?.map((item: any) => (
            <UserItem
              key={item.id}
              className={styles.userItem}
              isOnline={true}
              date={item.createdAt}
              type={UserLocations.CHAT}
              avatar={Avatar3}
              message={item.message}
              currentUser={me}
              user={item.user_from}
            />
          ))}
          <div className={styles.date}>
            <span>Today</span>
          </div>
        </div>
      </div>
      <Typing />
    </div>
  );
};
