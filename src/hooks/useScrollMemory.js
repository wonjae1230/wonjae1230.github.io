import { useEffect } from "react";

const KEY = "home-scroll";

// 상세 페이지로 이동하기 전 위치를 기억해 두었다가, 홈으로 돌아오면 복원한다.
export function rememberScroll() {
  try {
    sessionStorage.setItem(KEY, String(window.scrollY));
  } catch {
    // 무시
  }
}

export default function useScrollMemory() {
  useEffect(() => {
    let y = null;
    try {
      y = sessionStorage.getItem(KEY);
      sessionStorage.removeItem(KEY);
    } catch {
      // 무시
    }
    if (y !== null) {
      requestAnimationFrame(() => window.scrollTo({ top: Number(y), behavior: "instant" }));
    } else if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);
}
