import { useState } from 'react'
import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Skills() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="skills" id="skills">
      <div className="section-rule">
        <span className="section-label">// Skills</span>
        <span className="section-meta">Tools I have shipped with</span>
      </div>

      <div className="skills-head">
        <Reveal>
          <h2>
            <span>Built in production.</span>
            <span className="accent">Sharpened in backend.</span>
          </h2>
        </Reveal>
        <p className="skills-note">
          Grouped by the work each tool belongs to, not as a wall of logos.
        </p>
      </div>

      <div className="skills-table">
        <div className="skills-row skills-row-head" aria-hidden="true">
          <span>#</span>
          <span>Category</span>
          <span>Tools</span>
          <span />
        </div>

        {skills.map((skill, index) => {
          const expanded = open === skill.id
          return (
            <Reveal key={skill.id} delay={index * 50} className="skills-row-wrap">
              <div className="skills-row">
                <span className="skills-index">{skill.id}</span>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
                <button
                  type="button"
                  className="skills-toggle"
                  aria-expanded={expanded}
                  aria-controls={`skill-${skill.id}`}
                  aria-label={`${expanded ? 'Close' : 'Explore'} ${skill.title} details`}
                  onClick={() => setOpen(expanded ? null : skill.id)}
                >
                  {expanded ? 'Close −' : 'Explore +'}
                </button>
              </div>
              <div
                className="skills-panel"
                id={`skill-${skill.id}`}
                hidden={!expanded}
              >
                <p>{skill.detail}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
