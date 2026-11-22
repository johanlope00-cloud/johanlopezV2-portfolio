"use client";
import { useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Close on outside click / Escape (only listens while the menu is open).
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${open ? " menu-open" : ""}${
        scrolled ? " scrolled" : ""
      }`}
    >
      <div className="container nav-bar">
        <a
          className="logo-link"
          href="/johanlopezresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Johan Lopez's resume (PDF) in a new tab"
        >
          <SafeImage
            src="/johanlogob2.png"
            alt="Johan Lopez logo"
            className="logo-img logo-light"
            fallbackLabel="JL"
            loading="eager"
          />
          <SafeImage
            src="/johanlogow2.png"
            alt="Johan Lopez logo"
            className="logo-img logo-dark"
            fallbackLabel="JL"
            loading="eager"
          />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`nav-link${active === l.id ? " active" : ""}`}
                  aria-current={active === l.id ? "true" : undefined}
                  onClick={() => handleLinkClick(l.id)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            ref={burgerRef}
            type="button"
            className="icon-btn burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu">
        <div className="mobile-menu-clip">
          <nav className="container" aria-label="Mobile">
            <ul>
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`mobile-link${active === l.id ? " active" : ""}`}
                    aria-current={active === l.id ? "true" : undefined}
                    onClick={() => handleLinkClick(l.id)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
