import Reveal from "./Reveal";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    period: "2024 – Present",
    school: "Holy Cross College of Davao",
    place: "Davao City, Philippines",
    label: "Relevant Coursework",
    courses:
      "Programming, Web Development, Database Management, and Systems Analysis.",
  },
  {
    degree: "Senior High School (SHS) – TVL - Computer Systems Servicing (CSS)",
    period: "2022 – 2024",
    school: "Holy Cross of Sasa",
    place: "Davao City, Philippines",
    label: "Relevant Coursework",
    courses:
      "Computer Hardware Servicing, Networking, Troubleshooting, and Technical Support.",
  },
  {
    degree: "Junior High School",
    period: "2018 – 2022",
    school: "Holy Cross of Sasa",
    place: "Davao City, Philippines",
    label: "Relevant Subjects",
    courses: "Mathematics, Science, English, TLE, and Computer Literacy.",
  },
  {
    degree: "Elementary Education",
    period: "2012 – 2018",
    school: "Vicente Hizon, Sr. Elementary School",
    place: "Davao City, Philippines",
    label: "Relevant Subjects",
    courses:
      "Mathematics, English, Science, Filipino, and Basic Computer Literacy.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">04 — Education</p>
          <h2 id="education-title" className="section-title">
            Education
          </h2>
        </Reveal>

        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80}>
              <article className="card card-hover edu-card">
                <div className="edu-main">
                  <h3>{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-place">{e.place}</p>
                  <p className="edu-courses">
                    <strong>{e.label}:</strong> {e.courses}
                  </p>
                </div>
                <p className="edu-date">{e.period}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
