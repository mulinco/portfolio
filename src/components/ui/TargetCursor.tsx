import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

export interface TargetCursorProps {
  isKawaii: boolean;
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  isKawaii,
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const spinTl = useRef<gsap.core.Timeline | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef<{ x: number; y: number }[] | null>(
    null,
  );
  const tickerFnRef = useRef<(() => void) | null>(null);
  const activeStrengthRef = useRef({ current: 0 });

  // 🚀 O segredo estava aqui: o Ref precisa ficar no topo do componente!
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cursorColor = isKawaii ? "#D86487" : "#D2042D";

  const isMobile = useMemo(() => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth <= 768
    );
  }, []);

  const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { x, y, duration: 0.1, ease: "power3.out" });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll<HTMLDivElement>(
      ".target-cursor-corner",
    );

    let activeTarget: Element | null = null;
    let currentLeaveHandler: (() => void) | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentLeaveHandler)
        target.removeEventListener("mouseleave", currentLeaveHandler);
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    spinTl.current = gsap
      .timeline({ repeat: -1 })
      .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });

    const tickerFn = () => {
      if (
        !targetCornerPositionsRef.current ||
        !cursorRef.current ||
        !cornersRef.current
      )
        return;
      const strength = activeStrengthRef.current.current;
      if (strength === 0) return;

      const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
      const cursorY = gsap.getProperty(cursorRef.current, "y") as number;

      Array.from(cornersRef.current).forEach((corner, i) => {
        const currentX = gsap.getProperty(corner, "x") as number;
        const currentY = gsap.getProperty(corner, "y") as number;
        const targetX = targetCornerPositionsRef.current![i].x - cursorX;
        const targetY = targetCornerPositionsRef.current![i].y - cursorY;

        const finalX = currentX + (targetX - currentX) * strength;
        const finalY = currentY + (targetY - currentY) * strength;

        gsap.to(corner, {
          x: finalX,
          y: finalY,
          duration: strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05,
          ease: "power1.out",
          overwrite: "auto",
        });
      });
    };

    tickerFnRef.current = tickerFn;

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const enterHandler = (e: MouseEvent) => {
      const target = (e.target as Element).closest(targetSelector);
      if (!target || activeTarget === target) return;

      if (activeTarget) cleanupTarget(activeTarget);

      // 🚀 Limpando o timeout usando o Ref
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }

      activeTarget = target;
      spinTl.current?.pause();
      gsap.set(cursor, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
        {
          x: rect.right + borderWidth - cornerSize,
          y: rect.bottom + borderWidth - cornerSize,
        },
        {
          x: rect.left - borderWidth,
          y: rect.bottom + borderWidth - cornerSize,
        },
      ];

      isActiveRef.current = true;
      gsap.ticker.add(tickerFnRef.current!);
      gsap.to(activeStrengthRef.current, {
        current: 1,
        duration: hoverDuration,
        ease: "power2.out",
      });

      const leaveHandler = () => {
        gsap.ticker.remove(tickerFnRef.current!);
        isActiveRef.current = false;
        targetCornerPositionsRef.current = null;
        gsap.set(activeStrengthRef.current, { current: 0 });
        activeTarget = null;

        const pos = [
          { x: -18, y: -18 },
          { x: 6, y: -18 },
          { x: 6, y: 6 },
          { x: -18, y: 6 },
        ];

        Array.from(cornersRef.current!).forEach((corner, i) => {
          gsap.to(corner, {
            x: pos[i].x,
            y: pos[i].y,
            duration: 0.3,
            ease: "power3.out",
          });
        });

        // 🚀 Reativando o giro com o timeout controlado
        resumeTimeoutRef.current = setTimeout(() => {
          spinTl.current?.play();
          resumeTimeoutRef.current = null;
        }, 50);

        cleanupTarget(target);
      };

      currentLeaveHandler = leaveHandler;
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler);

    return () => {
      if (tickerFnRef.current) gsap.ticker.remove(tickerFnRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      document.body.style.cursor = originalCursor;
      spinTl.current?.kill();
    };
  }, [
    targetSelector,
    spinDuration,
    moveCursor,
    constants,
    hideDefaultCursor,
    isMobile,
    hoverDuration,
    parallaxOn,
  ]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-500"
        style={{ backgroundColor: cursorColor }}
      />
      {[
        "border-r-0 border-b-0", // Top-Left
        "border-l-0 border-b-0", // Top-Right
        "border-l-0 border-t-0", // Bottom-Right
        "border-r-0 border-t-0", // Bottom-Left
      ].map((borderClasses, i) => (
        <div
          key={i}
          className={`target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] transition-colors duration-500 ${borderClasses}`}
          style={{
            borderColor: cursorColor,
            transform: `translate(${i === 0 || i === 3 ? "-150%" : "50%"}, ${i === 0 || i === 1 ? "-150%" : "50%"})`,
          }}
        />
      ))}
    </div>
  );
};

export default TargetCursor;
