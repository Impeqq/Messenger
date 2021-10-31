import React, { ChangeEvent, useState } from "react";
import styles from "./styles.scss";
import AttachIcon from "@assets/svg/attach.svg";
import CameraIcon from "@assets/svg/camera.svg";
import ImageIcon from "@assets/svg/image.svg";
import MicIcon from "@assets/svg/mic.svg";
import SendIcon from "@assets/svg/send.svg";
import { SEND_MESSAGE } from "@schemas";
import { useMutation } from "@apollo/client";
import { RouteParams } from "@features/types";
import { useParams } from "react-router-dom";
import { BaseForm } from "@components";
import { useForm, UseFormOptions } from "react-hook-form";
import { Input } from "@ui";

export const Typing = () => {
  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE);

  const { id } = useParams<RouteParams>();

  const handleSendMessage = (data: UseFormOptions["defaultValues"]) => {
    if (data?.message) {
      formMethods.reset({});
      sendMessage({
        variables: {
          chat: id,
          message: data?.message,
        },
      });
    }
  };

  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <BaseForm
      formMethods={formMethods}
      onSubmit={handleSendMessage}
      className={styles.typing}
    >
      <div className={styles.actions}>
        <CameraIcon />
        <ImageIcon />
        <AttachIcon />
      </div>
      <Input
        type="text"
        name="message"
        rules={{}}
        className={styles.input}
        placeholder="Type your message"
      />
      <div>
        <MicIcon />
        <button>
          <SendIcon fill="#ffffff" />
        </button>
      </div>
    </BaseForm>
  );
};
