import React, { useEffect, useState } from "react";
import styles from "./styles.scss";
import MoreHorizontalIcon from "@assets/svg/more-horizontal.svg";
import PhoneIcon from "@assets/svg/phone.svg";
import SearchIcon from "@assets/svg/search.svg";
import Avatar1 from "@assets/images/avatar1.png";
import Avatar2 from "@assets/images/avatar2.png";
import Avatar3 from "@assets/images/avatar3.png";
import { Typing } from "./typing";
import { Avatar, Date, UserItem, UserLocations } from "@ui";
import { FETCH_CHAT, FETCH_ME, SUBSCRIBE_CHAT } from "@schemas";
import { useQuery, useSubscription } from "@apollo/client";
import { useParams } from "react-router-dom";
import { RouteParams, TUser } from "@features/types";

const OFFSET = 15;

export const Chat = () => {
  const [offset, setOffset] = useState(0);
  const [hasMessages, setHasMessages] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [messages, setMessages] = useState<any>([]);
  const [reciever, setReciever] = useState("");

  const { id } = useParams<RouteParams>();

  useEffect(() => {
    setOffset(0);
    setMessages([]);
    setHasMessages(true);
  }, [id]);

  const { data: userData } = useQuery(FETCH_ME, { fetchPolicy: "cache-only" });
  useQuery(FETCH_CHAT, {
    fetchPolicy: "no-cache",
    variables: {
      id,
      offset,
    },
    onCompleted: (data) => {
      const chat = data?.getChat;
      const dataReciever = chat?.users
        .map((item: TUser) => item.id !== userData?.me?.id && item)
        .filter((item: TUser) => item)[0];

      setCurrentUser(userData?.me?.id);
      setReciever(`${dataReciever?.firstName} ${dataReciever?.lastName}`);
      !chat?.messages.length && setHasMessages(false);
      setMessages([...messages, ...(chat?.messages || {})]);
    },
  });
  useSubscription(SUBSCRIBE_CHAT, {
    variables: { chatId: id },
    onSubscriptionData: ({ subscriptionData: { data } }: any) => {
      setMessages([data.messageSent, ...messages]);
    },
  });

  const handleScroll = (e: any) => {
    const isTop =
      e.target.scrollHeight - e.target.offsetHeight ===
      Math.abs(e.target.scrollTop);
    if (isTop && hasMessages && e.target.scrollTop !== 0) {
      console.log(offset);
      setOffset(offset + OFFSET);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        <div className={styles.header}>
          <div className={styles.members}>
            {/* <Avatar image={Avatar1} alt="Avatar" />
            <Avatar image={Avatar2} alt="Avatar" />
            <Avatar image={Avatar3} alt="Avatar" />
            <div className={styles.circle} /> */}
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{reciever}</span>
            <span className={styles.time}>last seen 34 minutes ago</span>
          </div>
          <div className={styles.actions}>
            <SearchIcon />
            <PhoneIcon />
            <MoreHorizontalIcon />
          </div>
        </div>
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
              currentUser={currentUser}
              user={item.user_from}
            />
          ))}
          <Date date={"Today"} />
        </div>
      </div>
      <Typing />
    </div>
  );
};
