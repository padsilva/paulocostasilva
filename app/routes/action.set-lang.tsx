import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs, data } from "react-router";

import { LangFormSchema } from "~/utils/lang";
import { setLang } from "~/utils/lang.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, {
    schema: LangFormSchema,
  });
  if (submission.status !== "success") {
    return data({ status: "error", submission } as const, { status: 400 });
  }
  const { lang } = submission.value;

  const responseInit = {
    headers: { "set-cookie": setLang(lang) },
  };
  return data({ success: true, submission }, responseInit);
}
