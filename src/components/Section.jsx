// 왼쪽 열에 섹션 이름, 오른쪽 열에 내용을 두는 공통 레이아웃
function Section({ id, title, en, aside, children }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="max-w-page mx-auto px-4 sm:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-6">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
              {en}
            </p>
            {aside && <div className="mt-6 text-sm text-muted">{aside}</div>}
          </div>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export default Section;
