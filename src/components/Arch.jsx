// 강조 단어 아래에 걸치는 아치 (다리 모양)
function Arch({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className={`absolute left-[-3%] -bottom-[0.1em] w-[106%] h-[0.16em] overflow-visible ${className}`}
    >
      <path
        d="M2 18 Q50 -6 98 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default Arch;
