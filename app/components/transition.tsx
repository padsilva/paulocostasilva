import { type ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";

import { Typography, type TypographyProps } from "./typography";

import { useSidebar } from "~/hooks/use-sidebar";
import { useRequestInfo } from "~/utils/request-info";

export function Transition({
  children,
  icon,
  label,
  transitionMobile = false,
  size = "body2",
  ...rest
}: {
  icon?: ReactElement;
  label?: string;
  transitionMobile?: boolean;
} & Partial<TypographyProps>) {
  const requestInfo = useRequestInfo();
  const { t } = useTranslation();
  const { isSidebarOpen } = useSidebar();

  const [isAnimating, setIsAnimating] = useState(true);
  const [message, setMessage] = useState(t(label ?? ""));
  const nodeRef = useRef(null);

  const handleAnimation = () => {
    setIsAnimating(true);

    // Simulate a delay before resetting the animation flag and changing the text
    setTimeout(() => {
      setIsAnimating(false);
    }, 0);
  };

  useEffect(() => {
    handleAnimation();
  }, [requestInfo.userPrefs.lang]);

  return (
    <CSSTransition
      in={isAnimating}
      nodeRef={nodeRef}
      timeout={500}
      classNames={isSidebarOpen && !transitionMobile ? "" : "fade"}
      unmountOnExit
      onExited={() => {
        setIsAnimating(true);
        if (label) setMessage(t(label));
      }}
    >
      {children ? (
        <div ref={nodeRef}>{children}</div>
      ) : (
        <Typography
          size={size}
          ref={nodeRef}
          as={icon ? "span" : undefined}
          className={icon ? "first-letter:capitalize" : undefined}
          {...rest}
        >
          {icon && <>{icon}</>}
          {message}
        </Typography>
      )}
    </CSSTransition>
  );
}
