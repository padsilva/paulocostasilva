import * as cookie from "cookie";

const cookieName = "my_remix_lang";
export type Lang = "pt" | "en";

export function getLang(request: Request): Lang | null {
  const cookieHeader = request.headers.get("cookie");
  const parsed = cookieHeader ? cookie.parse(cookieHeader)[cookieName] : "en";
  return parsed === "pt" || parsed === "en" ? parsed : null;
}

export function setLang(lang: Lang) {
  return cookie.serialize(cookieName, lang, { path: "/" });
}
