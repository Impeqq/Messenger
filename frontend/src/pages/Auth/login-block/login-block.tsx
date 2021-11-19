import { BaseForm } from "@components";
import { AlertMessage, Button, ButtonType, Input } from "@ui";
import styles from "./styles.scss";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SEND_LOGIN } from "@schemas";
import { useForm, UseFormOptions } from "react-hook-form";
import { loginModel } from "@features/models";
import { AUTH_TOKEN } from "@features/constants";
import { routePath } from "@pages/routes";
import { useLocalStorage } from "@features/hooks";
import { AlertTypes } from "@features/enum";

export default function LoginBlock() {
  const history = useHistory();
  const { setItem } = useLocalStorage();
  const [sendLogin, { loading, error }] = useMutation(SEND_LOGIN, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: ({ signIn }) => {
      setItem(AUTH_TOKEN, signIn);
      history.push(routePath.main.path);
    },
  });

  const handleSubmit = (data: UseFormOptions["defaultValues"]) => {
    sendLogin({
      variables: {
        email: data?.[loginModel.email],
        password: data?.[loginModel.password],
      },
    });
  };

  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <BaseForm
      formMethods={formMethods}
      onSubmit={handleSubmit}
      className={styles.loginBlock}
    >
      <Input placeholder={"Email"} name={loginModel.email} />
      <Input
        placeholder={"Password"}
        name={loginModel.password}
        type={"password"}
      />
      <AlertMessage type={AlertTypes.DANGER} message={error?.message} />
      <div className={styles.buttonGroup}>
        <Button
          text={"Sign In"}
          type={ButtonType.SUBMIT}
          loading={loading}
          withDisable={true}
        />
        <a>Forgot your password?</a>
      </div>
    </BaseForm>
  );
}
