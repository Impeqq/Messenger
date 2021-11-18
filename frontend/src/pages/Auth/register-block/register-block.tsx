import { BaseForm } from "@components";
import { Button, ButtonType, AlertMessage, Input } from "@ui";
import styles from "./styles.scss";
import { useForm, UseFormOptions } from "react-hook-form";
import { registerModel } from "@features/models";
import { SEND_REGISTER } from "@schemas";
import { useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "@features/constants";
import { routePath } from "@pages/routes";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "@features/hooks";
import { AlertTypes } from "@features/enum";

export const RegisterBlock = () => {
  const history = useHistory();
  const { setItem } = useLocalStorage();
  const [sendRegister, { loading, error }] = useMutation(SEND_REGISTER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: ({ signUp }) => {
      setItem(AUTH_TOKEN, signUp);
      history.push(routePath.profile.path);
    },
  });

  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleSubmit = (data: UseFormOptions["defaultValues"]) => {
    sendRegister({
      variables: {
        email: data?.[registerModel.email],
        password: data?.[registerModel.password],
        firstName: data?.[registerModel.firstName],
        lastName: data?.[registerModel.lastName],
      },
    });
  };

  return (
    <BaseForm
      formMethods={formMethods}
      onSubmit={handleSubmit}
      className={styles.registerBlock}
    >
      <span className={styles.title}>New to the messenger?</span>
      <span className={styles.description}>Instant registration</span>
      <Input placeholder={"First name"} name={registerModel.firstName} />
      <Input placeholder={"Last name"} name={registerModel.lastName} />
      <Input placeholder={"Email"} name={registerModel.email} />
      <Input
        placeholder={"Password"}
        name={registerModel.password}
        type={"password"}
      />
      <AlertMessage
        type={AlertTypes.DANGER}
        className={styles.errorMessage}
        message={error?.message}
      />
      <Button
        className={styles.button}
        text={"Sign Up"}
        type={ButtonType.SUBMIT}
        loading={loading}
        withDisable={true}
      />
    </BaseForm>
  );
};
