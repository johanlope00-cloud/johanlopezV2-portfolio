"use client";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <>
      <button type="button" className="copy-btn" onClick={copy}>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        {status === "copied"
          ? "Copied!"
          : status === "failed"
            ? "Copy failed"
            : "Copy email"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied"
          ? "Email address copied to clipboard"
          : status === "failed"
            ? "Could not copy the email address"
            : ""}
      </span>
    </>
  );
}
