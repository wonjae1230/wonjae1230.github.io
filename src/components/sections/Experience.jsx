import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";

const MIN = 2.5;
const MAX = 4.5;

function GpaChart({ data, summary }) {
  const total = summary?.total ?? data.reduce((sum, d) => sum + d.gpa, 0) / data.length;

  return (
    <div>
      <dl className="flex flex-wrap items-end gap-x-10 gap-y-4">
        <div>
          <dt className="font-mono text-xs text-muted">전체 평점</dt>
          <dd className="mt-1 text-4xl font-semibold tracking-tight">
            {total.toFixed(2)}
            <span className="ml-2 font-mono text-xs font-normal text-muted">/ 4.5</span>
          </dd>
        </div>
        {summary?.major && (
          <div>
            <dt className="font-mono text-xs text-muted">전공 평점</dt>
            <dd className="mt-1 text-4xl font-semibold tracking-tight text-accent">
              {summary.major.toFixed(2)}
              <span className="ml-2 font-mono text-xs font-normal text-muted">/ 4.5</span>
            </dd>
          </div>
        )}
      </dl>
      <ol
        className="mt-6 grid gap-2 sm:gap-3 h-40 items-end"
        style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
        aria-label="학기별 학점"
      >
        {data.map((d, i) => {
          const latest = i === data.length - 1;
          return (
            <li key={d.semester} className="h-full flex flex-col justify-end items-center gap-2">
              <span className={`font-mono text-xs ${latest ? "text-accent" : "text-muted"}`}>
                {Number.isInteger(d.gpa * 10) ? d.gpa.toFixed(1) : d.gpa.toFixed(2)}
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
          <GpaChart data={user_info.gpa} summary={user_info.gpaSummary} />
        </div>
      </div>
    </Section>
  );
}

export default Experience;
