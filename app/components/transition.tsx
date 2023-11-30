import { type ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";

import { useRequestInfo } from "~/utils/request-info";
import { Typography, type TypographyProps } from "./typography";

export function Transition({
  children,
  icon,
  label,
  noTransitionMobile,
  size = "body2",
  ...rest
}: {
  icon?: ReactElement;
  label?: string;
  noTransitionMobile?: boolean;
} & Partial<TypographyProps>) {
  const requestInfo = useRequestInfo();
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(true);
  const [message, setMessage] = useState(t(label || ""));
  const [isMobile, setIsMobile] = useState(false);
  const nodeRef = useRef(null);

  const handleAnimation = () => {
    setIsAnimating(true);

    // Simulate a delay before resetting the animation flag and changing the text
    setTimeout(() => {
      setIsAnimating(false);
    }, 0);
  };

  useEffect(() => {
    const initialMatch = window.matchMedia("(max-width: 1024px)").matches;
    setIsMobile(initialMatch);

    const mediaQueryList = window.matchMedia("(max-width: 1024px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    handleAnimation();
  }, [requestInfo.userPrefs.lang]);

  return (
    <CSSTransition
      in={isAnimating}
      nodeRef={nodeRef}
      timeout={500}
      classNames={isMobile && noTransitionMobile ? "" : "fade"}
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
