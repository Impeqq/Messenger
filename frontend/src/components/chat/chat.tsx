import { useEffect, useState } from "react";
import styles from "./styles.scss";
import Avatar3 from "@assets/images/avatar3.png";
import { Typing } from "./typing";
import { UserItem, UserLocations } from "@ui";
import {
  FETCH_CHAT,
  FETCH_ME,
  SUBSCRIBE_CHAT,
  SUBSCRIBE_MESSAGES_UPDATED,
  UPDATE_MESSAGES_READ,
} from "@schemas";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { useParams } from "react-router-dom";
import { RouteParams, TMessage, TUser } from "@features/types";
import { ChatHeader } from "./chat-header";

const OFFSET = 10;

export const Chat = () => {
  const [updateMessagesRead] = useMutation(UPDATE_MESSAGES_READ);
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
      const unreadMessages = _messages
        .filter(
          (message: TMessage) => !message.read && message.user_from.id !== me.id
        )
        .map((message: TMessage) => message.id);
      if (unreadMessages.length) {
        updateMessagesRead({
          variables: {
            ids: unreadMessages,
            chat_id: id,
          },
        });
      }
      if (_messages.length) {
        setMessages([...messages, ...(_messages || {})]);
      } else {
        setHasMessages(false);
      }
    },
  });
  useSubscription(SUBSCRIBE_CHAT, {
    variables: { chat_id: id },
    onSubscriptionData: ({
      subscriptionData: {
        data: { messageSent },
      },
    }) => {
      if (messageSent.user_from.id !== me.id) {
        updateMessagesRead({
          variables: {
            ids: [messageSent.id],
            chat_id: id,
          },
        });
      }
      setMessages([messageSent, ...messages]);
    },
  });
  useSubscription(SUBSCRIBE_MESSAGES_UPDATED, {
    variables: { chat_id: id },
    onSubscriptionData: ({
      subscriptionData: {
        data: { messagesUpdated },
      },
    }) => {
      setMessages(
        messages.map((message: TMessage) => {
          if (messagesUpdated.message_ids.includes(message.id)) {
            return { ...message, read: true };
          }
          return message;
        })
      );
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
          {messages?.map((message: TMessage) => {
            const data = {
              date: message.createdAt,
              message: message.message,
              user: message.user_from,
              read: message.read,
            };

            return (
              <UserItem
                key={message.id}
                className={styles.userItem}
                isOnline={true}
                type={UserLocations.CHAT}
                avatar={Avatar3}
                currentUser={me}
                {...data}
              />
            );
          })}
          <div className={styles.date}>
            <span>Today</span>
          </div>
        </div>
      </div>
      <Typing />
    </div>
  );
};
