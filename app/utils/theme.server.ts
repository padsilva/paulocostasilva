import * as cookie from "cookie";

const cookieName = "my_remix_theme";
export type Theme = "light" | "dark";

export function getTheme(request: Request): Theme | null {
  const cookieHeader = request.headers.get("cookie");
  const parsed = cookieHeader
    ? cookie.parse(cookieHeader)[cookieName]
    : "light";
  return parsed === "light" || parsed === "dark" ? parsed : null;
}

export function setTheme(theme: Theme) {
  return cookie.serialize(cookieName, theme, { path: "/" });
}
