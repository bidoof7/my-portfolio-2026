import { useState } from 'react'
import type { WorkItem } from '../data/portfolio'
import { workItems } from '../data/portfolio'
import { CaseStudy } from './CaseStudy'
import { Reveal } from './Reveal'

export function Work() {
  const [active, setActive] = useState<WorkItem | null>(null)

  return (
    <section className="work" id="work" tabIndex={-1}>
      <div className="section-rule">
        <span className="section-label">// Selected work</span>
        <span className="section-meta">Three roles / 2024—2026</span>
      </div>

      <ul className="work-list">
        {workItems.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 70} className="work-row-wrap">
              <button
                type="button"
                className="work-row"
                onClick={() => setActive(item)}
                aria-haspopup="dialog"
              >
                <span className="work-index">{item.id}</span>
                <span className="work-main">
                  <span className="work-title">{item.title}</span>
                  <span className="work-discipline">
                    {item.stack.slice(0, 3).join(' / ')}
                  </span>
                </span>
                <span className="work-type">{item.type}</span>
                <span className="work-year">{item.period}</span>
                <span className="work-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="work-cta">
        <p>Want the details behind a specific decision?</p>
        <a className="pill" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </Reveal>

      <CaseStudy
        open={active !== null}
        onClose={() => setActive(null)}
        title={active ? `${active.id} / ${active.title}` : 'Case study'}
      >
        {active && <CaseStudyBody item={active} />}
      </CaseStudy>
    </section>
  )
}

function CaseStudyBody({ item }: { item: WorkItem }) {
  return (
    <article className="case-content">
      <p className="case-kicker">
        {item.type} / {item.period}
      </p>
      <h2>{item.title}</h2>
      <p className="case-summary">{item.summary}</p>

      <dl className="case-facts">
        <div>
          <dt>Role</dt>
          <dd>{item.role}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{item.stack.join(', ')}</dd>
        </div>
      </dl>

      <div className="case-section">
        <h3>What I worked on</h3>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      {item.link && (
        <a
          className="pill case-link"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.linkLabel} <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}
