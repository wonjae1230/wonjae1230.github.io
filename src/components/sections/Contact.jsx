import { useState } from "react";
import user_info from "../../data/user_info.js";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // 클립보드 API를 쓸 수 없는 환경
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      onClick={copy}
      className={`shrink-0 font-mono text-xs px-3 py-1 rounded-full border transition-colors ${
        copied ? "border-accent text-accent" : "border-line text-muted hover:border-ink hover:text-ink"
      }`}
    >
      <span aria-live="polite">{copied ? "복사됨" : "복사"}</span>
    </button>
  );
}

function Row({ label, children }) {
  return (
    <li className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[8rem_1fr] items-center gap-4 py-5 border-b border-line">
      <span className="font-mono text-xs text-muted">{label}</span>
      <div className="flex items-center justify-between gap-4 min-w-0">{children}</div>
    </li>
  );
}

function Contact() {
  const { email } = user_info.main;
  const { title, channels } = user_info.contact;

  return (
    <section id="contact" className="border-t border-line">
      <div className="max-w-page mx-auto px-4 sm:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Contact</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.35] whitespace-pre-line">
            {title}
          </h2>
        </div>

        <ul className="md:col-span-7 border-t border-line self-end">
          <Row label="Email">
            <a
              href={`mailto:${email}`}
              className="text-[15px] sm:text-xl font-medium break-all hover:text-accent transition-colors"
            >
              {email}
            </a>
            <CopyButton text={email} />
          </Row>
          {channels.map(({ label, key, handle }) =>
            user_info.socials[key] ? (
              <Row key={key} label={label}>
                <a
                  href={user_info.socials[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-1 flex items-center justify-between gap-4 min-w-0"
                >
                  <span className="text-lg truncate group-hover:text-accent transition-colors">{handle}</span>
                  <span aria-hidden="true" className="text-muted group-hover:text-accent transition-colors">↗</span>
                </a>
              </Row>
            ) : null
          )}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
