import { about, profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="about" id="about" tabIndex={-1}>
      <div className="section-rule">
        <span className="section-label">// About</span>
        <span className="section-meta">
          {profile.location} / Available for backend roles
        </span>
      </div>

      <Reveal className="about-statement">
        <h2>
          {about.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </Reveal>

      <div className="about-meta">
        <Reveal className="about-note">
          <p>{about.note}</p>
        </Reveal>
        <div className="about-tags">
          <span className="about-tags-label">Focus</span>
          <ul>
            {about.disciplines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        // </div>
      </div>
    </section>
  )
}
