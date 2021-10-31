import { BaseForm } from "@components";
import {
  Button,
  ButtonStyle,
  ButtonType,
  AlertMessage,
  IconDirection,
  Input,
  InputGroup,
} from "@ui";
import GoogleLogoIcon from "@assets/svg/google-logo.svg";
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
      history.push(routePath.main.path);
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
        avatar: data?.[registerModel.avatar].item(0),
      },
    });
  };

  const handleRegisterGoogle = () => {
    console.log("google");
  };

  return (
    <BaseForm
      formMethods={formMethods}
      onSubmit={handleSubmit}
      className={styles.registerBlock}
    >
      <span className={styles.title}>New to the messenger?</span>
      <span className={styles.description}>Instant registration</span>
      <Input placeholder={"Avatar"} type="file" name={registerModel.avatar} />
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
      <InputGroup>
        <Button
          text={"Sign Up"}
          type={ButtonType.SUBMIT}
          loading={loading}
          withDisable={true}
        />
        <Button
          text={"Sign Up"}
          iconDirection={IconDirection.RIGHT}
          icon={<GoogleLogoIcon />}
          style={ButtonStyle.OUTLINE}
          onClick={handleRegisterGoogle}
        />
      </InputGroup>
    </BaseForm>
  );
};
