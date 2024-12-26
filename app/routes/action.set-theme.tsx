import { parseWithZod } from "@conform-to/zod";
import { type ActionFunctionArgs, data } from "react-router";

import { ThemeFormSchema } from "~/utils/theme";
import { setTheme } from "~/utils/theme.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, {
    schema: ThemeFormSchema,
  });
  if (submission.status !== "success") {
    return data({ status: "error", submission } as const, { status: 400 });
  }
  const { theme } = submission.value;

  const responseInit = {
    headers: { "set-cookie": setTheme(theme) },
  };
  return data({ success: true, submission }, responseInit);
}
