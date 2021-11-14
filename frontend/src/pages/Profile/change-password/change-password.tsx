import { useMutation } from "@apollo/client";
import { BaseForm } from "@components";
import { AlertTypes } from "@features/enum";
import { registerModel } from "@features/models";
import { SEND_UPDATE_PASSWORD } from "@schemas";
import { AlertMessage, Button, ButtonType, Input, InputGroup } from "@ui";
import { useState } from "react";
import { useForm, UseFormOptions } from "react-hook-form";
import styles from "./styles.scss";

export const ChangePassword = () => {
  const [message, setMessage] = useState<string | undefined>(undefined);

  const [sendUpdatePassword, { loading, error }] = useMutation(
    SEND_UPDATE_PASSWORD,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
      onCompleted: () => {
        setMessage("You successfully changed your password");
      },
    }
  );
  const handleSubmit = (data: UseFormOptions["defaultValues"]) => {
    setMessage(undefined);
    sendUpdatePassword({
      variables: {
        password: data?.[registerModel.password],
        newPassword: data?.[registerModel.newPassword],
        repeatedPassword: data?.[registerModel.repeatedPassword],
      },
    });
  };

  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <BaseForm onSubmit={handleSubmit} formMethods={formMethods}>
      <p className={styles.title}>User password</p>
      <p className={styles.description}>
        Enter your new password and repeat it to avoid errors
      </p>
      <InputGroup>
        <Input
          hidden={true}
          type={"password"}
          name={registerModel.password}
          text="Current password"
        />
        <Input
          hidden={true}
          type={"password"}
          name={registerModel.newPassword}
          text="New password"
        />
      </InputGroup>
      <InputGroup>
        <Button
          text={"Change password"}
          type={ButtonType.SUBMIT}
          loading={loading}
        />
        <Input
          hidden={true}
          type={"password"}
          name={registerModel.repeatedPassword}
          text="Repeat new password"
        />
      </InputGroup>
      <AlertMessage
        className={styles.passwordAlert}
        type={AlertTypes.DANGER}
        message={error?.message}
      />
      <AlertMessage
        className={styles.passwordAlert}
        type={AlertTypes.SUCCESS}
        message={message}
      />
    </BaseForm>
  );
};
