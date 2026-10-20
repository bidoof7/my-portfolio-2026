import { featured } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Featured() {
  return (
    <section className="featured" id="featured" tabIndex={-1}>
      <div className="section-rule">
        <span className="section-label">// Featured project</span>
        <span className="section-meta">Personal project // {featured.year}</span>
      </div>

      <div className="featured-head">
        <Reveal>
          <p className="featured-kicker">{featured.eyebrow}</p>
          <h2 className="featured-title">
            <span>{featured.title[0]}</span>
            <span>{featured.title[1]}</span>
          </h2>
        </Reveal>

        <Reveal className="featured-summary" delay={80}>
          <p>{featured.summary}</p>
          <a
            className="featured-link"
            href={featured.repo}
            target="_blank"
            rel="noreferrer"
          >
            github.com/happy-bmo/task-manager-microservice
            <span aria-hidden="true"> ↗</span>
          </a>
        </Reveal>
      </div>

      <Reveal className="featured-diagram">
        <ArchitectureDiagram />
      </Reveal>

      <div className="featured-decisions">
        {featured.decisions.map((decision, index) => (
          <Reveal key={decision.title} className="decision" delay={index * 70}>
            <span className="decision-label">{decision.label}</span>
            <h3>{decision.title}</h3>
            <p>{decision.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="featured-foot">
        <ul className="featured-stack">
          {featured.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="featured-note">{featured.note}</p>
        <a
          className="pill"
          href={featured.repo}
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1120 460"
      role="img"
      aria-label="Architecture diagram: a React or client request enters the API gateway, passes through Spring Security and JWT validation, then reaches task and group services backed by SQL Server and Redis. Services publish domain events through an outbox to Kafka for asynchronous consumers."
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 10 5 0 10z" fill="#777" />
        </marker>
      </defs>

      <g stroke="#2b2b2b" strokeWidth="1">
        <path d="M0 0h1120M0 115h1120M0 230h1120M0 345h1120M0 460h1120" />
        <path d="M0 0v460M140 0v460M280 0v460M420 0v460M560 0v460M700 0v460M840 0v460M980 0v460M1120 0v460" />
      </g>

      <g fontFamily="ui-monospace, Consolas, monospace" fontSize="10" letterSpacing="1.6" fill="#7a7a7a">
        <text x="16" y="26">REQUEST</text>
        <text x="296" y="26">SECURITY</text>
        <text x="576" y="26">DOMAIN SERVICES</text>
        <text x="856" y="26">ASYNC / DATA</text>
      </g>

      <g>
        <rect x="40" y="168" width="150" height="74" fill="#0c0c0c" stroke="#4a4a4a" />
        <text x="58" y="197" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="15">
          Client
        </text>
        <text x="58" y="218" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          REST / JSON
        </text>
      </g>

      <path d="M190 205h54" stroke="#777" markerEnd="url(#arrow)" />

      <g>
        <rect x="244" y="132" width="190" height="146" fill="#0c0c0c" stroke="#ff630f" />
        <text x="262" y="160" fill="#ff630f" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.4">
          SPRING SECURITY
        </text>
        <text x="262" y="192" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="15">
          JWT validation
        </text>
        <text x="262" y="214" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          access token
        </text>
        <text x="262" y="242" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="15">
          Refresh tokens
        </text>
        <text x="262" y="264" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          Redis store
        </text>
      </g>

      <path d="M434 205h54" stroke="#777" markerEnd="url(#arrow)" />

      <g>
        <rect x="488" y="96" width="204" height="82" fill="#0c0c0c" stroke="#4a4a4a" />
        <text x="506" y="124" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="15">
          Task service
        </text>
        <text x="506" y="146" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          create / assign / list
        </text>
        <text x="506" y="164" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          JUnit covered
        </text>
      </g>

      <g>
        <rect x="488" y="232" width="204" height="82" fill="#0c0c0c" stroke="#4a4a4a" />
        <text x="506" y="260" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="15">
          Group service
        </text>
        <text x="506" y="282" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          membership / access
        </text>
        <text x="506" y="300" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          REST contracts
        </text>
      </g>

      <path d="M692 137h42v-14h44" stroke="#777" fill="none" markerEnd="url(#arrow)" />
      <path d="M692 273h42v14h44" stroke="#777" fill="none" markerEnd="url(#arrow)" />

      <g>
        <rect x="778" y="82" width="152" height="68" fill="#0c0c0c" stroke="#4a4a4a" />
        <text x="794" y="108" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="14">
          Outbox
        </text>
        <text x="794" y="130" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          same transaction
        </text>
      </g>

      <g>
        <rect x="778" y="260" width="152" height="68" fill="#0c0c0c" stroke="#4a4a4a" />
        <text x="794" y="286" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="14">
          SQL Server
        </text>
        <text x="794" y="308" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          persistent state
        </text>
      </g>

      <path d="M930 116h48" stroke="#777" markerEnd="url(#arrow)" />

      <g>
        <rect x="978" y="82" width="112" height="68" fill="#0c0c0c" stroke="#ff630f" />
        <text x="994" y="108" fill="#f2f0e9" fontFamily="Arial, sans-serif" fontSize="14">
          Kafka
        </text>
        <text x="994" y="130" fill="#8a8a8a" fontFamily="ui-monospace, monospace" fontSize="10">
          consumers
        </text>
      </g>

      <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#6f6f6f" letterSpacing="1.2">
        <text x="40" y="424">DOCKER PACKAGED / SWAGGER OPENAPI / POSTMAN COLLECTION</text>
        <text x="930" y="424">GITHUB ACTIONS</text>
      </g>
      <path d="M40 404h1040" stroke="#2b2b2b" />
    </svg>
  )
}
