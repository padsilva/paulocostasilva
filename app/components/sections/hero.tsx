import { useTranslation } from "react-i18next";

import { Avatar } from "../avatar";
import { Transition } from "../transition";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-wrap gap-12" id="#">
      <div className="flex md:flex-row flex-col gap-12 justify-center">
        <div className="flex flex-col justify-center md:items-start items-center self-stretch">
          <Avatar size="medium" name="profile" />
        </div>
        <div className="flex flex-col justify-center items-start self-stretch flex-[1_0_0] gap-2">
          <Transition label={t("greetings")} size="h1" noTransitionMobile />
          <Transition
            className="text-justify whitespace-pre-line"
            label={t("abstract")}
            noTransitionMobile
          />
        </div>
      </div>
    </section>
  );
}
