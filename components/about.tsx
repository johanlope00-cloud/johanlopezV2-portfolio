import Reveal from "./Reveal";

const interests = [
  "Front-End Development",
  "Web Design and Development",
  "User Interface Design",
  "Responsive Web Design",
  "Interactive User Experiences",
  "Learning Modern Web Technologies",
];

export default function About() {
  return (
    <section
      id="about"
      className="section section-soft"
      aria-labelledby="about-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">01 — About</p>
          <h2 id="about-title" className="section-title">
            About Me
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              {
                "I'm Johan Louis Lopez, an aspiring Front-End Developer with a strong interest in Front-End Development and UI/UX Design. I enjoy creating websites that combine clean design, responsive layouts, and functional user experiences."
              }
            </p>
            <p>
              {
                "Through my academic and personal projects, I've gained experience working with programming languages, web technologies, and design tools. I'm always eager to explore new technologies, improve my development skills, and turn creative ideas into meaningful digital experiences."
              }
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="card about-card">
              <dl>
                <div className="detail">
                  <dt>Full Name</dt>
                  <dd>Johan Louis Lopez</dd>
                </div>
                <div className="detail">
                  <dt>Program</dt>
                  <dd>Bachelor of Science in Information Technology</dd>
                </div>
                <div className="detail">
                  <dt>Location</dt>
                  <dd>Davao City, Philippines</dd>
                </div>
              </dl>
              <h3>Interests</h3>
              <ul className="chips">
                {interests.map((i) => (
                  <li key={i} className="tag">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
