import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import user_info from "../data/user_info.js";
import Header from "../components/Header.jsx";
import NotFound from "./404.jsx";

function Block({ title, children }) {
  return (
    <section className="grid md:grid-cols-12 gap-4 md:gap-6 py-10 border-t border-line">
      <h2 className="md:col-span-3 font-mono text-xs uppercase tracking-wider text-muted pt-1">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}

function Gallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  return (
    <figure>
      <div className="bg-surface border border-line rounded-sm overflow-hidden">
        <img
          src={images[index]}
          alt={`${title} 스크린샷 ${index + 1}`}
          className="w-full aspect-[16/9] object-contain"
        />
      </div>
      {count > 1 && (
        <figcaption className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
          <span>
            {index + 1} / {count}
          </span>
          <span className="flex gap-2">
            <button
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              className="px-3 py-1 border border-line rounded-full hover:border-ink hover:text-ink transition-colors"
              aria-label="이전 스크린샷"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % count)}
              className="px-3 py-1 border border-line rounded-full hover:border-ink hover:text-ink transition-colors"
              aria-label="다음 스크린샷"
            >
              →
            </button>
          </span>
        </figcaption>
      )}
    </figure>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = user_info.projects;
  const i = projects.findIndex((p) => p.id === id);
  const project = projects[i];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) return <NotFound />;

  const next = projects[(i + 1) % projects.length];
  const goBack = () => (window.history.state?.idx > 0 ? navigate(-1) : navigate("/#projects"));

  return (
    <>
      <Header />
      <main key={id} className="max-w-page mx-auto px-4 sm:px-8 reveal">
        <div className="pt-10 md:pt-16">
          <button
            onClick={goBack}
            className="font-mono text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            ← 작업 목록
          </button>
          <h1 className="mt-6 text-5xl md:text-8xl font-extrabold tracking-[-0.05em] leading-none">
            {project.title}
          </h1>
          {(project.period || project.award || project.leader || project.solo) && (
            <p className="mt-5 font-mono text-xs text-muted flex flex-wrap gap-x-4 gap-y-1">
              {project.period && <span>{project.period}</span>}
              {project.leader && <span className="text-ink">팀장</span>}
              {project.solo && <span>개인 프로젝트</span>}
              {project.award && <span className="text-accent">{project.award}</span>}
            </p>
          )}
          <p className="mt-6 text-lg md:text-xl max-w-[34em] text-ink/85 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {project.link && project.link !== project.github && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-ink text-bg font-medium hover:bg-accent transition-colors"
              >
                사이트 열기 ↗
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full border border-line hover:border-ink transition-colors"
            >
              GitHub 저장소 ↗
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          {(project.screenshots?.length || project.image) && (
            <Gallery key={id} images={project.screenshots ?? [project.image]} title={project.title} />
          )}
        </div>

        <div className="mt-12">
          <Block title="소개">
            <p className="text-lg leading-relaxed text-ink/85">{project.detailedDescription}</p>
          </Block>

          {project.role && (
            <Block title="맡은 역할">
              <p className="text-lg leading-relaxed text-ink/85">{project.role}</p>
            </Block>
          )}

          <Block title="주요 기능">
            <ul className="grid sm:grid-cols-2 gap-x-6">
              {project.features.map((f) => (
                <li key={f} className="py-3 border-b border-line">
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="기술 스택">
            <dl>
              {project.techStack.map((t) => (
                <div key={t.name} className="grid grid-cols-[9rem_1fr] gap-4 py-3 border-b border-line">
                  <dt className="font-medium">{t.name}</dt>
                  <dd className="text-muted">{t.reason}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="배운 점">
            <ul className="space-y-3 text-ink/85">
              {project.learned.map((l) => (
                <li key={l} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted">
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <Link
          to={`/project/${next.id}`}
          className="group block border-t border-line py-12 md:py-16"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted">다음 작업</p>
          <p className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight group-hover:text-accent transition-colors">
            {next.title} →
          </p>
        </Link>
      </main>
    </>
  );
}

export default ProjectDetail;
