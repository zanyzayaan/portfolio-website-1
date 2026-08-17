"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const halo = haloRef.current;
    if (!cursor || !halo) return;

    const onMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      const interactive = (event.target as HTMLElement | null)?.closest(
        'a, button, [data-cursor="interactive"]'
      );
      cursor.classList.toggle("is-interactive", Boolean(interactive));
      halo.classList.toggle("is-interactive", Boolean(interactive));
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.24;
      current.current.y += (target.current.y - current.current.y) * 0.24;
      const { x, y } = current.current;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      halo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={haloRef} className="cursor-halo" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span className="cursor-dot" />
        <svg className="cursor-hand" viewBox="0 0 32 32" fill="none">
          <path
            d="M11.3 15.2V8.6a1.9 1.9 0 0 1 3.8 0v5.1-7.1a1.9 1.9 0 0 1 3.8 0v7.1-5.3a1.9 1.9 0 0 1 3.8 0v6.1-3.5a1.9 1.9 0 0 1 3.8 0v8.4c0 5-3.8 8.5-8.7 8.5h-.8c-2.6 0-4.9-1.2-6.4-3.2l-3.4-4.5a1.9 1.9 0 0 1 3-2.3l1.1 1.4v-3.1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
