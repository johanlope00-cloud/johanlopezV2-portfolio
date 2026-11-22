import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import CopyEmail from "./CopyEmail";

const EMAIL = "johanlope00@gmail.com";
const GMAIL_COMPOSE =
  "https://mail.google.com/mail/?view=cm&fs=1&to=johanlope00@gmail.com";

const rows = [
  {
    num: "01",
    label: "Phone",
    value: "+0993 887 1021",
    href: "tel:+639938871021",
    external: false,
    icon: "/callicon2.svg",
    fallback: "T",
  },
  {
    num: "02",
    label: "GitHub",
    value: "github.com/johanlope00-cloud",
    href: "https://github.com/johanlope00-cloud",
    external: true,
    icon: "/gitbicon2.svg",
    fallback: "G",
  },
  {
    num: "03",
    label: "Facebook",
    value: "facebook.com/Johan Louis Lopez",
    href: "https://www.facebook.com/johanlouis.lopez",
    external: true,
    icon: "/fbicon2.svg",
    fallback: "F",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section-soft"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <Reveal>
          <p className="eyebrow">05 — Contact</p>
          <h2 id="contact-title" className="section-title">
            {"Let's Work Together"}
          </h2>
          <p className="section-sub">
            {
              "Have a question, an idea, or an opportunity to collaborate? I'd love to hear from you. Feel free to reach out through any of the contact details below."
            }
          </p>
          <div className="email-row">
            <a
              className="email-link"
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMAIL} ↗
            </a>
            <CopyEmail email={EMAIL} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="card contact-card">
            {rows.map((r) => (
              <li key={r.num}>
                <a
                  className="contact-row"
                  href={r.href}
                  {...(r.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="row-num">{r.num}</span>
                  <span className="icon-chip">
                    <SafeImage
                      src={r.icon}
                      alt=""
                      className="contact-icon"
                      fallbackLabel={r.fallback}
                    />
                  </span>
                  <span className="row-text">
                    <span className="row-label">{r.label}</span>
                    <span className="row-value">{r.value}</span>
                  </span>
                  {r.external ? (
                    <span className="row-arrow" aria-hidden="true">
                      ↗
                    </span>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
