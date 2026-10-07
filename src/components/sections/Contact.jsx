import user_info from "../../data/user_info.js";

const SOCIAL_LABELS = {
  github: "GitHub",
  velog: "velog",
  tistory: "Tistory",
  linkedin: "LinkedIn",
  instagram: "Instagram",
};

function Contact() {
  const { email } = user_info.main;

  return (
    <section id="contact" className="border-t border-line">
      <div className="max-w-page mx-auto px-4 sm:px-8 py-20 md:py-32">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">Contact</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-[18em] leading-tight">
          {user_info.contact.title}
        </h2>
        <p className="mt-6 max-w-[36em] text-ink/80 leading-relaxed">
          {user_info.contact.description}
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-12 inline-block text-[7vw] sm:text-4xl md:text-6xl font-semibold tracking-tight underline decoration-line decoration-2 underline-offset-[0.2em] hover:text-accent hover:decoration-accent transition-colors break-all"
        >
          {email}
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {Object.entries(SOCIAL_LABELS).map(([key, label]) =>
            user_info.socials[key] ? (
              <li key={key}>
                <a
                  href={user_info.socials[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {label} ↗
                </a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
