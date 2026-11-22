"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";

const projects = [
  {
    num: "01",
    title: "Personal Portfolio Website",
    description:
      "A responsive website that introduces me, highlights my skills, and presents my projects.",
    image: "/pfpproject2.png",
    alt: "Preview of the Personal Portfolio Website project",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    num: "02",
    title: "Student Login Application",
    description:
      "A simple Android-based application with a login and registration flow, built as part of my coursework.",
    image: "/saproject2.png",
    alt: "Preview of the Student Login Application project",
    tags: ["Java", "Android Studio", "Firebase"],
  },
  {
    num: "03",
    title: "UI Design",
    description:
      "A simple interface concept focused on clear navigation and a user-friendly experience.",
    image: "/uiproject2.png",
    alt: "Preview of the UI Design project",
    tags: ["Figma", "UI Design"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openProject = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(index);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || selected === null || dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }, [selected]);

  const closeProject = () => dialogRef.current?.close();

  const handleClosed = () => {
    document.body.style.overflow = "";
    setSelected(null);
    triggerRef.current?.focus();
  };

  const project = selected !== null ? projects[selected] : null;

  return (
    <section
      id="projects"
      className="section section-soft"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">03 — Projects</p>
          <h2 id="projects-title" className="section-title">
            Featured Projects
          </h2>
          <p className="section-sub">
            {
              "A selection of projects I've worked on, showcasing my experience in development, application design, and user interfaces."
            }
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 90}>
              <article className="card card-hover project-card">
                <button
                  type="button"
                  className="project-media"
                  aria-label={`View details for ${p.title}`}
                  aria-haspopup="dialog"
                  onClick={(e) => openProject(i, e.currentTarget)}
                >
                  <SafeImage
                    src={p.image}
                    alt={p.alt}
                    className="project-img"
                    fallbackLabel={p.title}
                  />
                  <span className="project-view" aria-hidden="true">
                    View details
                  </span>
                </button>
                <div className="project-body">
                  <span className="project-index">Project {p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="chips project-tags">
                    {p.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="modal-title"
        onClose={handleClosed}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeProject();
        }}
      >
        {project && (
          <>
            <button
              type="button"
              className="icon-btn modal-close"
              aria-label="Close project details"
              onClick={closeProject}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="modal-media">
              <SafeImage
                src={project.image}
                alt={project.alt}
                className="modal-img"
                fallbackLabel={project.title}
              />
            </div>
            <div className="modal-body">
              <span className="project-index">Project {project.num}</span>
              <h3 id="modal-title">{project.title}</h3>
              <p>{project.description}</p>
              <ul className="chips">
                {project.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
