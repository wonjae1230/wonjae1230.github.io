import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";

const MIN = 2.5;
const MAX = 4.5;

function GpaChart({ data }) {
  const avg = data.reduce((sum, d) => sum + d.gpa, 0) / data.length;

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-semibold tracking-tight">{avg.toFixed(2)}</span>
        <span className="font-mono text-xs text-muted">평균 / 4.5</span>
      </div>
      <ol className="mt-6 grid grid-cols-6 gap-2 sm:gap-3 h-40 items-end" aria-label="학기별 학점">
        {data.map((d, i) => {
          const latest = i === data.length - 1;
          return (
            <li key={d.semester} className="h-full flex flex-col justify-end items-center gap-2">
              <span className={`font-mono text-xs ${latest ? "text-accent" : "text-muted"}`}>
                {d.gpa.toFixed(1)}
              </span>
              <div
                className={`w-full rounded-t-sm ${latest ? "bg-accent" : "bg-ink/15"}`}
                style={{ height: `${((d.gpa - MIN) / (MAX - MIN)) * 100}%` }}
              />
              <span className="font-mono text-xs text-muted">{d.semester}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Row({ when, title, sub, image, children }) {
  return (
    <li className="grid sm:grid-cols-[12rem_1fr] gap-x-6 gap-y-2 py-6 border-b border-line">
      <p className="font-mono text-xs text-muted pt-1">{when}</p>
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

      <div className="mt-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">학력</h3>
          <ul className="mt-2 border-t border-line">
            {user_info.education.map((edu) => (
              <Row key={edu.school} when={edu.duration} title={edu.school} sub={edu.degree} image={edu.image} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-6">학기별 학점</h3>
          <GpaChart data={user_info.gpa} />
        </div>
      </div>
    </Section>
  );
}

export default Experience;
