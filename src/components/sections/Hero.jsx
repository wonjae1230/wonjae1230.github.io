import user_info from "../../data/user_info.js";
import Arch from "../Arch.jsx";

function Hero() {
  const { name, role, tagline, description, photo, email } = user_info.main;
  const school = user_info.education[0];
  const sentence = tagline.before.replace("\n", " ") + tagline.emphasis + tagline.after;

  return (
    <section id="hero" className="max-w-page mx-auto px-4 sm:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        {name} · {role}
      </p>

      <h1
        aria-label={sentence}
        className="mt-6 font-extrabold tracking-[-0.04em] leading-[1.18] whitespace-pre-line text-[10.5vw] sm:text-[4.25rem] md:text-[5.75rem] lg:text-[7rem]"
      >
        <span aria-hidden="true" className="emerge inline-block">
          {tagline.before}
          <span className="relative inline-block text-accent">
            {tagline.emphasis}
            <Arch className="arch-draw" />
          </span>
          {tagline.after}
        </span>
      </h1>

      <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-6 items-end">
        <div className="md:col-span-7 reveal" style={{ animationDelay: "1.5s" }}>
          <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed max-w-[34em] text-ink/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-ink text-bg font-medium hover:bg-accent transition-colors"
            >
              작업 보기
            </a>
            <a
              href={`mailto:${email}`}
              className="px-5 py-2.5 rounded-full border border-line hover:border-ink transition-colors"
            >
              메일 보내기
            </a>
          </div>
        </div>

        <figure className="md:col-span-3 md:col-start-10 reveal" style={{ animationDelay: "1.65s" }}>
          <img
            src={photo.replace("../", "/")}
            alt={`${name} 프로필 사진`}
            className="w-36 md:w-full md:max-w-[240px] aspect-[4/5] object-cover rounded-sm"
          />
          <figcaption className="mt-3 font-mono text-xs text-muted leading-relaxed">
            {school.school} · {school.degree}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
