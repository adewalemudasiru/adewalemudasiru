import { useEffect } from "react";

export const useLockScroll = (isLocked) => {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
};
