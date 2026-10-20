import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="experience" id="experience" tabIndex={-1}>
      <div className="section-rule">
        <span className="section-label">// Experience</span>
        <span className="section-meta">Professional work / full-time</span>
      </div>

      <Reveal className="exp-head">
        <h2>
          {experience.company}
          <span className="exp-dot" aria-hidden="true">
            .
          </span>
        </h2>
        <div className="exp-role">
          <span>{experience.role}</span>
          <span>{experience.period}</span>
          <span>{experience.location}</span>
        </div>
        <p className="exp-summary">{experience.summary}</p>
      </Reveal>

      <div className="exp-list">
        {experience.contributions.map((item, index) => (
          <Reveal key={item.title} className="exp-item" delay={index * 90}>
            <div className="exp-item-head">
              <span className="exp-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <span className="exp-item-meta">{item.meta}</span>
            </div>
            <p className="exp-item-summary">{item.summary}</p>
            <ul className="exp-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="exp-tech" aria-label={`${item.title} technologies`}>
              {item.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
