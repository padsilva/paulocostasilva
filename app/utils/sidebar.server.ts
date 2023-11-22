import * as cookie from "cookie";

const cookieName = "my_remix_sidebar";
export type Sidebar = "true" | "false";

export function getSidebar(request: Request): Sidebar | null {
  const cookieHeader = request.headers.get("cookie");
  const parsed = cookieHeader
    ? cookie.parse(cookieHeader)[cookieName]
    : "false";
  return parsed === "true" || parsed === "false" ? parsed : null;
}

export function setSidebar(sidebar: Sidebar) {
  return cookie.serialize(cookieName, sidebar, { path: "/" });
}
