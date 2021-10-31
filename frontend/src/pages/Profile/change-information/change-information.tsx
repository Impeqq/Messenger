import { useMutation, useQuery } from "@apollo/client";
import { BaseForm } from "@components";
import { AUTH_TOKEN } from "@features/constants";
import { AlertTypes } from "@features/enum";
import { getImage } from "@features/helpers/getImage";
import { useLocalStorage } from "@features/hooks";
import { registerModel } from "@features/models";
import { TUser } from "@features/types";
import { FETCH_ME, SEND_UPDATE } from "@schemas";
import {
  AlertMessage,
  Button,
  ButtonStyle,
  ButtonType,
  Input,
  InputGroup,
} from "@ui";
import React, { useState } from "react";
import { useForm, UseFormOptions } from "react-hook-form";
import Avatar1 from "@assets/images/avatar1.png";
import UploadIcon from "@assets/svg/upload.svg";
import styles from "./styles.scss";

export const ChangeInformation = () => {
  const { setItem } = useLocalStorage();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [me, setMe] = useState<TUser | undefined>(undefined);

  const { data } = useQuery(FETCH_ME, {
    fetchPolicy: "network-only",
    onCompleted: ({ me }) => {
      setMe(me);
      formMethods.reset({
        [registerModel.firstName]: me?.firstName,
        [registerModel.lastName]: me?.lastName,
        [registerModel.email]: me?.email,
        [registerModel.password]: me?.password,
      });
    },
  });

  const [sendUpdate, { loading, error }] = useMutation(SEND_UPDATE, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: ({ updateUser }) => {
      setMessage("You successfully changed your information");
      setItem(AUTH_TOKEN, updateUser);
    },
  });

  const handleSubmit = (data: UseFormOptions["defaultValues"]) => {
    setMessage(undefined);
    sendUpdate({
      variables: {
        email: data?.[registerModel.email],
        password: data?.[registerModel.password],
        firstName: data?.[registerModel.firstName],
        lastName: data?.[registerModel.lastName],
        avatar: data?.[registerModel.avatar]?.item(0),
      },
    });
  };

  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleReset = () => {
    setPreview(undefined);
    formMethods.reset({
      [registerModel.firstName]: me?.firstName,
      [registerModel.lastName]: me?.lastName,
      [registerModel.email]: me?.email,
      [registerModel.avatar]: undefined,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreview(URL.createObjectURL((e.target.files?.[0] || {}) as MediaSource));
  };

  const avatar = getImage(data?.me?.avatar?.id) || Avatar1;

  return (
    <BaseForm onSubmit={handleSubmit} formMethods={formMethods}>
      <div className={styles.flexBlock}>
        <div>
          <p className={styles.title}>User Information</p>
          <p className={styles.description}>
            Enter the information you want to change. You can also change the
            avatar
          </p>
        </div>
        <label className={styles.avatarBlock}>
          <Input
            type="file"
            onChange={handleChange}
            rules={{}}
            name={registerModel.avatar}
          />
          <img src={preview || avatar} alt="Avatar" />
          <div className={styles.avatarBackground}>
            <UploadIcon />
          </div>
        </label>
      </div>
      <Input name={registerModel.firstName} text="First Name" />
      <Input name={registerModel.lastName} text="Last Name" />
      <Input name={registerModel.email} text="Email" />
      <AlertMessage type={AlertTypes.DANGER} message={error?.message} />
      <AlertMessage type={AlertTypes.SUCCESS} message={message} />
      <InputGroup className={styles.buttonGroup}>
        <Button
          text={"Reset"}
          style={ButtonStyle.OUTLINE}
          onClick={handleReset}
        />
        <Button
          text={"Update"}
          type={ButtonType.SUBMIT}
          withDisable={true}
          loading={loading}
        />
      </InputGroup>
    </BaseForm>
  );
};
