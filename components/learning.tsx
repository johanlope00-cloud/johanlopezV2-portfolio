"use client";
import { useEffect, useState } from "react";

const topics = [
  "modern web technologies",
  "responsive design",
  "UI/UX design",
  "Android app development",
];

export default function Learning() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % topics.length),
      3000,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="status-pill">
      <span className="status-dot" aria-hidden="true" />
      <span>Currently learning</span>
      <span key={index} className="status-topic">
        {topics[index]}
      </span>
    </p>
  );
}
