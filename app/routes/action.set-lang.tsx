import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs, json } from "@remix-run/server-runtime";

import { LangFormSchema } from "~/utils/lang";
import { setLang } from "~/utils/lang.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parse(formData, {
    schema: LangFormSchema,
  });
  if (submission.intent !== "submit") {
    return json({ status: "idle", submission } as const);
  }
  if (!submission.value) {
    return json({ status: "error", submission } as const, { status: 400 });
  }
  const { lang } = submission.value;

  const responseInit = {
    headers: { "set-cookie": setLang(lang) },
  };
  return json({ success: true, submission }, responseInit);
}
