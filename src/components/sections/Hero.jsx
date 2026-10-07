import user_info from "../../data/user_info.js";
import Arch from "../Arch.jsx";

// "[Guider](guider)" → 작업 목록의 #project-guider 로 이동하는 링크
function withProjectLinks(text) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <a
        key={i}
        href={`#project-${m[2]}`}
        className="font-semibold text-ink underline decoration-[1.5px] underline-offset-[0.22em] decoration-ink/70 hover:text-accent hover:decoration-accent transition-colors"
      >
        {m[1]}
      </a>
    );
  });
}

function Hero() {
  const { name, role, tagline, description, photo, email } = user_info.main;
  const school = user_info.education[0];
  const sentence = tagline.before.replace("\n", " ") + tagline.emphasis + tagline.after;

  return (
    <section id="hero" className="max-w-page mx-auto px-4 sm:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-6 items-center">
        <div className="md:col-span-9">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {name} · {role}
          </p>
          <h1
            aria-label={sentence}
            className="mt-6 font-extrabold tracking-[-0.04em] leading-[1.2] whitespace-pre-line text-[10.5vw] sm:text-[3.5rem] md:text-[4.1rem] lg:text-[5.4rem]"
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
        </div>

        <figure className="md:col-span-3 reveal" style={{ animationDelay: "0.6s" }}>
          <img
            src={photo.replace("../", "/")}
            alt={`${name} 프로필 사진`}
            className="w-32 md:w-full md:max-w-[240px] md:ml-auto aspect-[4/5] object-cover rounded-sm"
          />
          <figcaption className="mt-3 font-mono text-xs text-muted leading-relaxed md:text-right">
            {school.school} · {school.degree}
          </figcaption>
        </figure>
      </div>

      <div className="mt-14 md:mt-16 reveal" style={{ animationDelay: "1s" }}>
        <p className="text-lg md:text-xl leading-relaxed md:leading-relaxed max-w-[34em] text-ink/85">
          {withProjectLinks(description)}
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
    </section>
  );
}

export default Hero;
