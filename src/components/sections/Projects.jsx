import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";
import { rememberScroll } from "../../hooks/useScrollMemory.js";

const tags = (s) => s.split(",").map((t) => t.trim()).filter(Boolean);

function Projects() {
  const [active, setActive] = useState(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);

  // 미리보기 이미지가 커서를 따라다닌다 (마우스 환경에서만 표시)
  const onMove = (e) => {
    const box = listRef.current.getBoundingClientRect();
    previewRef.current.style.transform = `translate(${e.clientX - box.left + 24}px, ${e.clientY - box.top - 90}px)`;
  };

  return (
    <Section id="projects" title="작업" en={`Projects — ${user_info.projects.length}`}>
      <ul
        ref={listRef}
        onMouseMove={onMove}
        onMouseLeave={() => setActive(null)}
        className="relative border-t border-line"
      >
        {user_info.projects.map((p) => (
          <li key={p.id} className="border-b border-line">
            <Link
              to={`/project/${p.id}`}
              onClick={rememberScroll}
              onMouseEnter={() => setActive(p)}
              onFocus={() => setActive(null)}
              className="group grid grid-cols-[1fr_auto] md:grid-cols-12 gap-x-6 gap-y-2 py-6 md:py-8"
            >
              <h3 className="md:col-span-4 text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <span
                aria-hidden="true"
                className="md:order-last md:col-span-1 justify-self-end self-start text-xl text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
              >
                →
              </span>
              <div className="col-span-2 md:col-span-7">
                <p className="text-ink/80 leading-relaxed">{p.description}</p>
                <p className="mt-3 font-mono text-xs text-muted">
                  {tags(p.technologies).join(" · ")}
                </p>
              </div>
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="col-span-2 mt-3 w-full aspect-[16/9] object-cover rounded-sm border border-line md:hidden"
              />
            </Link>
          </li>
        ))}

        <div
          ref={previewRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden md:block z-10"
        >
          <img
            src={active?.image}
            alt=""
            className={`w-72 aspect-[16/10] object-cover rounded-sm shadow-xl border border-line transition-[opacity,transform] duration-200 ${
              active ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
      </ul>
    </Section>
  );
}

export default Projects;
