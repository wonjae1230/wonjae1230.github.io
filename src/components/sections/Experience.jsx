import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";

// "09 2026 - 10 2026 (2 Months)" → 기간과 괄호 내용을 두 줄로
function When({ text }) {
  const m = text.match(/^(.*?)\s*(\(.*\))$/);
  return (
    <p className="font-mono text-xs text-muted pt-1 leading-relaxed">
      <span className="whitespace-nowrap">{m ? m[1] : text}</span>
      {m && <span className="block">{m[2]}</span>}
    </p>
  );
}

function Row({ when, title, sub, image, children }) {
  return (
    <li className="grid sm:grid-cols-[12rem_1fr] gap-x-6 gap-y-2 py-6 border-b border-line">
      <When text={when} />
      <div>
        <div className="flex items-center gap-3">
          {image && (
            <img src={`/${image}`} alt="" className="w-8 h-8 rounded-full object-cover bg-surface" />
          )}
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted">{sub}</p>
          </div>
        </div>
        {children}
      </div>
    </li>
  );
}

function Experience() {
  return (
    <Section id="experience" title="경력" en="Experience & Education">
      <h3 className="font-mono text-xs uppercase tracking-wider text-muted">활동</h3>
      <ul className="mt-2 border-t border-line">
        {user_info.experience.map((exp) => (
          <Row
            key={exp.company}
            when={exp.duration}
            title={exp.company}
            sub={exp.position}
            image={exp.image}
          >
            <ul className="mt-4 space-y-2 text-ink/80 leading-relaxed">
              {exp.descriptions.map((d) => (
                <li key={d} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
                  {d.trim()}
                </li>
              ))}
            </ul>
            {exp.document && (
              <a
                href={exp.document.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-mono text-xs text-muted underline underline-offset-4 decoration-line hover:text-accent hover:decoration-accent transition-colors"
              >
                {exp.document.label} ↗
              </a>
            )}
          </Row>
        ))}
      </ul>

      <h3 className="mt-16 font-mono text-xs uppercase tracking-wider text-muted">학력</h3>
      <ul className="mt-2 border-t border-line">
        {user_info.education.map((edu) => (
          <Row key={edu.school + edu.degree} when={edu.duration} title={edu.school} sub={edu.degree} image={edu.image} />
        ))}
      </ul>
    </Section>
  );
}

export default Experience;
