import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-page mx-auto px-4 sm:px-8 py-24 md:py-40">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">404</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          없는 페이지입니다.
        </h1>
        <p className="mt-6 text-muted break-all">
          <span className="font-mono text-sm">{window.location.pathname}</span> 주소를 찾을 수 없어요.
          주소를 다시 확인하거나 홈에서 시작해 주세요.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block px-5 py-2.5 rounded-full bg-ink text-bg text-sm font-medium hover:bg-accent transition-colors"
        >
          홈으로 가기
        </Link>
      </main>
    </>
  );
}

export default NotFound;
