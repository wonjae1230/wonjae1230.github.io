import { useEffect, useState } from "react";

const CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const JUNG = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const JONG = " ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";
// 겹모음은 두 번의 키 입력으로 조합된다 (ㅜ + ㅓ = ㅝ)
const COMPOUND = { ㅘ: "ㅗ", ㅙ: "ㅗ", ㅚ: "ㅗ", ㅝ: "ㅜ", ㅞ: "ㅜ", ㅟ: "ㅜ", ㅢ: "ㅡ" };

const compose = (cho, jung, jong = 0) =>
  String.fromCharCode(0xac00 + (cho * 21 + jung) * 28 + jong);

// "이원재" → ["ㅇ", "이", "이ㅇ", "이우", "이워", "이원", "이원ㅈ", "이원재"]
export function typingSteps(text) {
  const steps = [];
  let done = "";
  for (const ch of text) {
    const code = ch.charCodeAt(0) - 0xac00;
    if (code < 0 || code > 11171) {
      done += ch;
      steps.push(done);
      continue;
    }
    const cho = Math.floor(code / 588);
    const jung = Math.floor((code % 588) / 28);
    const jong = code % 28;
    steps.push(done + CHO[cho]);
    const base = COMPOUND[JUNG[jung]];
    if (base) steps.push(done + compose(cho, JUNG.indexOf(base)));
    steps.push(done + compose(cho, jung));
    if (jong) steps.push(done + compose(cho, jung, jong));
    done += ch;
  }
  return steps;
}

export default function useHangulTyping(text, { delay = 500, interval = 140 } = {}) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [output, setOutput] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) return;
    const steps = typingSteps(text);
    const timers = steps.map((step, i) =>
      setTimeout(() => setOutput(step), delay + i * interval)
    );
    return () => timers.forEach(clearTimeout);
  }, [text, delay, interval, reduced]);

  return output;
}
