import { BaseForm } from "@components";
import { registerModel } from "@features/models";
import { Input } from "@ui";
import { useForm } from "react-hook-form";
import styles from "./styles.scss";

const Profile = () => {
  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  return (
    <BaseForm formMethods={formMethods} className={styles.container}>
      <p>User Information</p>
      <p>
        Enter the required information below to register. You can change it
        anytime you want.
      </p>
      <Input name={registerModel.firstName} placeholder="First Name" />
      <Input name={registerModel.lastName} placeholder="Last Name" />
      <Input name={registerModel.email} placeholder="Email" />
    </BaseForm>
  );
};

export default Profile;
