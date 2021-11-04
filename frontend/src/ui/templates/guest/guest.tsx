import { Header } from "@ui";

type TProps = {
  className?: string;
};

export const Guest: React.FC<TProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <div className={className}>{children}</div>
    </>
  );
};
