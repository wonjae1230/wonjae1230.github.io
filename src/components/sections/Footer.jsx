import user_info from "../../data/user_info.js";

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-4 sm:px-8 py-6 flex flex-wrap justify-between gap-3 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {user_info.main.name}</p>
        <a href="#top" className="hover:text-ink transition-colors">
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
