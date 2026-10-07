import user_info from "../../data/user_info.js";
import useHangulTyping from "../../hooks/useHangulTyping.js";

function Hero() {
  const { name, role, description, photo, email } = user_info.main;
  const typed = useHangulTyping(name);
  const school = user_info.education[0];

  return (
    <section id="hero" className="max-w-page mx-auto px-4 sm:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{role}</p>

      <h1
        aria-label={name}
        className="mt-4 font-extrabold tracking-[-0.06em] leading-[0.95] text-[28vw] sm:text-[11rem] md:text-[13rem]"
      >
        <span aria-hidden="true">{typed}</span>
        <span className="caret" aria-hidden="true" />
      </h1>

      <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 md:gap-6 items-end">
        <div className="md:col-span-7 reveal" style={{ animationDelay: "1.4s" }}>
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

        <figure className="md:col-span-3 md:col-start-10 reveal" style={{ animationDelay: "1.6s" }}>
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
