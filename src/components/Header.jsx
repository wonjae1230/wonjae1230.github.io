import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App.jsx";
import user_info from "../data/user_info.js";

const NAV = [
  { href: "/#projects", label: "작업" },
  { href: "/#experience", label: "경력" },
  { href: "/#awards", label: "수상" },
  { href: "/#skills", label: "기술" },
  { href: "/#contact", label: "연락" },
];

function Header() {
  const { theme, switchTheme } = useContext(AppContext);

  return (
    <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur border-b border-line">
      <div className="max-w-page mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-semibold tracking-tight">
          {user_info.main.name}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-7 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden sm:inline text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={switchTheme}
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className="font-mono text-xs uppercase tracking-wider border border-line rounded-full px-3 py-1 text-muted hover:text-ink hover:border-ink transition-colors"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
