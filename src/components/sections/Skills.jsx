import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";

function Skills() {
  return (
    <Section id="skills" title="기술" en="Skills & Certificates">
      <dl className="border-t border-line">
        {user_info.skills.map((s) => (
          <div key={s.group} className="grid sm:grid-cols-[12rem_1fr] gap-x-6 gap-y-2 py-5 border-b border-line">
            <dt className="font-mono text-xs text-muted pt-1.5">{s.group}</dt>
            <dd className="text-lg leading-relaxed">
              {s.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < s.items.length - 1 && <span className="text-muted/60 mx-2">/</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-16 font-mono text-xs uppercase tracking-wider text-muted">
        수료증 — {user_info.certificates.length}
      </h3>
      <ul className="mt-2 border-t border-line">
        {user_info.certificates.map((c) => (
          <li key={c.link} className="border-b border-line">
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-6 py-4"
            >
              <span className="group-hover:text-accent transition-colors">
                {c.title.replace(/ Certificate$/, "")}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {c.description.replace(/^Provided by /, "").replace(" & Authorized by ", " · ")} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
