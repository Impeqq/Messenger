import { throttle } from "lodash";
import React from "react";

type TProps = {
  className?: string;
  handleTop?: () => void;
  additionalCond?: boolean;
};

export const ScrollList: React.FC<TProps> = ({
  className,
  handleTop,
  additionalCond,
  children,
}) => {
  const handleScroll = throttle((event: React.UIEvent<HTMLDivElement>) => {
    const e = event.target as HTMLElement;
    const isTop = e.offsetHeight - e.scrollTop === e.scrollHeight;
    if (isTop && additionalCond) {
      handleTop?.();
    }
  }, 100);

  return (
    <div className={className} onScroll={handleScroll}>
      {children}
    </div>
  );
};
