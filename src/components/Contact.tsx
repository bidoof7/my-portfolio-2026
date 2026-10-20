import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section className="contact" id="contact" tabIndex={-1}>
      <div className="section-rule">
        <span className="section-label">// Contact</span>
        <span className="section-meta">{profile.location}</span>
      </div>

      <h2 className="contact-title">
        <span>Let&apos;s build</span>
        <span className="accent">something dependable.</span>
      </h2>

      <div className="contact-body">
        <div className="contact-copy">
          <p>
            I&apos;m looking for backend engineering work where clear APIs,
            reliable data, and maintainable systems matter.
          </p>
          <p className="contact-note">
            Java / Spring Boot / REST APIs / Enterprise systems
          </p>
        </div>

        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">{profile.email}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">github.com/happy-bmo</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </section>
  )
}
