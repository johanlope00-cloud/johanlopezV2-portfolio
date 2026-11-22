import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import Learning from "./learning";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <Learning />
          <p className="hero-name">Front-End Developer</p>
          <h1 id="hero-title">Johan Lopez.</h1>
          <p className="hero-lead">
            {
              "Hi, I'm Johan Lopez, a Front-End Developer passionate about creating clean, responsive, and user-friendly digital experiences."
            }
          </p>
          <p className="hero-desc">
            {
              "I enjoy turning ideas and designs into functional websites through thoughtful design, clean code, and modern web technologies. I'm continuously learning and improving my skills to build better digital experiences."
            }
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-media" delay={120}>
          <SafeImage
            src="/pfp2.png"
            alt="Portrait of Johan Lopez"
            className="hero-img"
            fallbackLabel="JL"
            loading="eager"
          />
        </Reveal>
      </div>
    </section>
  );
}
