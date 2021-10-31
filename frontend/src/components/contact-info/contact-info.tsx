import React from "react";
import MoreHorizontalIcon from "@assets/svg/more-horizontal.svg";
import styles from "./styles.scss";
import PhoneIcon from "@assets/svg/phone.svg";
import VideoIcon from "@assets/svg/video.svg";
import { Field } from "@ui";

export const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.header}>
        <span>Contact Information</span>
        <MoreHorizontalIcon />
      </div>
      <div className={styles.firstInfo}>
        <div className={styles.avatar}>
          <span>PR</span>
        </div>
        <span className={styles.title}>Partners 😎</span>
        <span className={styles.members}>13 members</span>
        <div className={styles.buttons}>
          <button>
            <PhoneIcon fill={"#4E73F8"} />
          </button>
          <button>
            <VideoIcon fill={"#4E73F8"} />
          </button>
        </div>
      </div>
      <div className={styles.secondInfo}>
        <Field title={"Username"} text={"@partners_chat"} />
        <Field title={"Mobile"} text={"(575) 213-5962"} />
        <Field
          title={"Description"}
          text={"Join us if u wanna work together 😈"}
        />
      </div>
    </div>
  );
};
