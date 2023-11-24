import { Avatar } from "../avatar";
import { Typography } from "../typography";

export function Hero() {
  return (
    <section className="py-24 flex flex-col flex-wrap gap-12" id="#">
      <div className="flex gap-12">
        <div className="flex flex-col justify-center items-start self-stretch">
          <Avatar size="medium" name="profile" />
        </div>
        <div className="flex flex-col justify-center items-start self-stretch flex-[1_0_0]">
          <Typography size="h1">Hi I'm Paulo</Typography>
          <Typography size="body2">
            Graduated in Informatics Engineering, I am looking for new
            challenges that allow the evolution of my career in this area, to
            which I have devoted myself with enthusiasm over the years. I want
            to show my full potential and, at the same time, value my work with
            a focus on competent and effective performance. In addition to my
            academic background, there are others that I am interested in, such
            as: cinema, sports, music and nature.
          </Typography>
        </div>
      </div>
    </section>
  );
}
