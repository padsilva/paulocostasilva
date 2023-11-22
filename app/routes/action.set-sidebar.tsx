import { parse } from "@conform-to/zod";
import { type DataFunctionArgs, json } from "@remix-run/server-runtime";

import { SidebarFormSchema } from "~/utils/sidebar";
import { setSidebar } from "~/utils/sidebar.server";

export async function action({ request }: DataFunctionArgs) {
  const formData = await request.formData();
  const submission = parse(formData, {
    schema: SidebarFormSchema,
  });
  if (submission.intent !== "submit") {
    return json({ status: "idle", submission } as const);
  }
  if (!submission.value) {
    return json({ status: "error", submission } as const, { status: 400 });
  }
  const { sidebar } = submission.value;

  const responseInit = {
    headers: { "set-cookie": setSidebar(sidebar) },
  };
  return json({ success: true, submission }, responseInit);
}
