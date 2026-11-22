import type { ReactNode } from "react";
import Reveal from "./Reveal";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const categories: {
  num: string;
  title: string;
  icon: ReactNode;
  items: string[];
}[] = [
  {
    num: "01",
    title: "Programming",
    icon: (
      <Icon>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </Icon>
    ),
    items: ["Java", "Python", "C++", "Basic Problem Solving"],
  },
  {
    num: "02",
    title: "Web Development",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </Icon>
    ),
    items: ["HTML", "CSS", "JavaScript", "Responsive Layouts"],
  },
  {
    num: "03",
    title: "Database",
    icon: (
      <Icon>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </Icon>
    ),
    items: ["MySQL", "Database Concepts", "Basic SQL"],
  },
  {
    num: "04",
    title: "App Development",
    icon: (
      <Icon>
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </Icon>
    ),
    items: ["Android Studio", "Java", "Firebase Basics"],
  },
  {
    num: "05",
    title: "Tools",
    icon: (
      <Icon>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </Icon>
    ),
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Android Studio",
      "Claude",
      "ChatGPT",
      "Gemini",
    ],
  },
  {
    num: "06",
    title: "Soft Skills",
    icon: (
      <Icon>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
    items: ["Teamwork", "Communication", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">02 — Skills</p>
          <h2 id="skills-title" className="section-title">
            Skills &amp; Technologies
          </h2>
        </Reveal>

        <div className="skills-grid">
          {categories.map((c, i) => (
            <Reveal key={c.num} delay={i * 70}>
              <article className="card card-hover skill-card">
                <div className="skill-top">
                  <span className="skill-num" aria-hidden="true">
                    {c.num}
                  </span>
                  <span className="icon-wrap">{c.icon}</span>
                </div>
                <h3>{c.title}</h3>
                <ul className="chips skill-chips">
                  {c.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
