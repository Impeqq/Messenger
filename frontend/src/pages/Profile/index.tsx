import styles from "./styles.scss";
import { ChangeInformation } from "./change-information";
import { ChangePassword } from "./change-password";
import { Tabs } from "@ui";

const TABS = ["Change information", "Change password"];

const Profile = () => {
  return (
    <div className={styles.container}>
      <Tabs
        className={styles.tabs}
        tabs={TABS}
        items={[<ChangeInformation />, <ChangePassword />]}
      ></Tabs>
    </div>
  );
};

export default Profile;
