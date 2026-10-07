import { useEffect, useRef, useState } from "react";
import user_info from "../../data/user_info.js";
import Section from "../Section.jsx";

// 날짜 내림차순 (최근 수상이 먼저)
const awards = [...user_info.awards].sort((a, b) => b.date.localeCompare(a.date));

function Scan({ award }) {
  const [missing, setMissing] = useState(!award.image);

  if (missing) {
    // 스캔 파일이 없을 때: 상장 형태의 빈 카드
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center border border-dashed border-line">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Certificate</span>
        <span className="text-2xl font-semibold tracking-tight">{award.title}</span>
        <span className="text-xs text-muted">{award.issuer}</span>
      </div>
    );
  }

  return (
    <a href={award.image} target="_blank" rel="noreferrer" className="block w-full h-full" aria-label={`${award.title} 상장 원본 보기`}>
      <img
        src={award.image}
        alt={`${award.event} ${award.title} 상장`}
        loading="lazy"
        onError={() => setMissing(true)}
        className="w-full h-full object-contain"
      />
    </a>
  );
}

function Awards() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  // 빠르게 연속 클릭해도 한 칸씩 이동하도록 목표 위치를 따로 기억
  const targetRef = useRef(0);

  // 스크롤 위치로 현재 카드 번호 계산
  useEffect(() => {
    const track = trackRef.current;
    const onScroll = () => {
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
      const card = track.firstElementChild;
      if (!card) return;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      setIndex(Math.min(awards.length - 1, Math.round(track.scrollLeft / step)));
    };
    const onScrollEnd = () => {
      const card = track.firstElementChild;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      targetRef.current = Math.round(track.scrollLeft / step);
    };
    track.addEventListener("scrollend", onScrollEnd);
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (dir) => {
    const track = trackRef.current;
    if (dir > 0 && atEnd) return;
    const next = Math.max(0, Math.min(awards.length - 1, targetRef.current + dir));
    targetRef.current = next;
    const card = track.children[next];
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const atStart = index === 0;

  return (
    <Section id="awards" title="수상" en={`Awards — ${awards.length}`}>
      <div className="flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")} / {String(awards.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={atStart}
            aria-label="이전 상장"
            className="w-10 h-10 rounded-full border border-line hover:border-ink disabled:opacity-30 disabled:hover:border-line transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            disabled={atEnd}
            aria-label="다음 상장"
            className="w-10 h-10 rounded-full border border-line hover:border-ink disabled:opacity-30 disabled:hover:border-line transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <ol
        ref={trackRef}
        tabIndex={0}
        aria-label="수상 목록"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
        className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {awards.map((a) => (
          <li key={a.title + a.date} className="snap-start shrink-0 w-[72%] sm:w-[44%] lg:w-[31%]">
            <div className="aspect-[1/1.414] bg-surface rounded-sm overflow-hidden">
              <Scan award={a} />
            </div>
            <p className="mt-4 font-mono text-xs text-muted">{a.date}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{a.title}</h3>
            <p className="text-sm text-ink/80">{a.event}</p>
            <p className="text-sm text-muted">{a.issuer}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Awards;
