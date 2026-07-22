import { useEffect, useRef, useState } from "react";

type RegisterRow = {
  time: string;
  output: string;
  check: string;
  result: "PASS" | "FLAG";
  followUp?: string;
};

const ROWS: RegisterRow[] = [
  { time: "09:41:07", output: "AML alert #4211 · dismissed", check: "recomputed from source", result: "PASS" },
  { time: "09:41:12", output: "Recon batch 88 · matched", check: "independently re-matched", result: "PASS" },
  { time: "09:41:18", output: "Journal entry 2201-B", check: "tied to ledger", result: "PASS" },
  {
    time: "09:41:25",
    output: "AML alert #4230 · dismissed",
    check: "policy threshold deviation",
    result: "FLAG",
    followUp: "escalated · reviewer sign-off pending",
  },
  { time: "09:41:31", output: "Filing figure F-114", check: "recomputed from GL", result: "PASS" },
  { time: "09:41:36", output: "Sanctions batch 512 · clear", check: "sample re-screened", result: "PASS" },
];

const VerificationRegister = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisibleCount(ROWS.length);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= ROWS.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), visibleCount === 0 ? 400 : 900);
    return () => clearTimeout(t);
  }, [started, visibleCount]);

  return (
    <div ref={containerRef} className="font-mono text-[13px] leading-relaxed">
      {/* Register header */}
      <div className="flex items-center justify-between border-b border-paper/15 pb-3 mb-1">
        <span className="eyebrow text-paper/45">Verification register</span>
        <span className="eyebrow text-tick flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-tick animate-pulse" aria-hidden />
          Continuous
        </span>
      </div>

      {ROWS.slice(0, visibleCount).map((row, i) => (
        <div key={i} className="border-b border-paper/10">
          <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[72px_1fr_auto_64px] gap-x-4 items-baseline py-3">
            <span className="text-paper/40">{row.time}</span>
            <span className="text-paper/90 truncate">{row.output}</span>
            <span className="hidden md:inline text-paper/45">{row.check}</span>
            <span
              className={
                row.result === "PASS"
                  ? "text-tick font-semibold text-right"
                  : "text-flag font-semibold text-right"
              }
            >
              {row.result === "PASS" ? "✓ PASS" : "⚑ FLAG"}
            </span>
          </div>
          {row.followUp && (
            <div className="pb-3 pl-[calc(72px+1rem)] hidden md:block text-flag/90">
              &rarr; {row.followUp}
            </div>
          )}
          {row.followUp && (
            <div className="pb-3 md:hidden text-flag/90">&rarr; {row.followUp}</div>
          )}
        </div>
      ))}

      {visibleCount >= ROWS.length && (
        <div className="pt-3 text-paper/35">
          every check sealed to the evidence pack · art. 12 logging
        </div>
      )}
    </div>
  );
};

export default VerificationRegister;
