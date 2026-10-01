import {
  ArrowDownRight,
  CalendarDays,
  Coins,
  MapPin,
  UsersRound,
  Lightbulb,
  Trophy,
  Network,
  Code2,
} from 'lucide-react';
import { SiFigma } from 'react-icons/si';

const featureItems = [
  {
    number: '01',
    title: 'Exciting challenges',
    body: 'Take on a problem statement and turn a promising idea into something real.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Build as a team',
    body: 'Team participation is at the heart of the event. Come ready to make together.',
    icon: UsersRound,
  },
  {
    number: '03',
    title: 'Prizes & recognition',
    body: 'Bring your best thinking. Celebrate the work, the ideas and the people behind them.',
    icon: Trophy,
  },
  {
    number: '04',
    title: 'Find your people',
    body: 'Network with like-minded tech enthusiasts, creators and problem solvers.',
    icon: Network,
  },
];

const people = [
  { role: 'Patron', name: 'Dr. B. Sadashive Gowda', title: 'Principal VVCE' },
  { role: 'Convener', name: 'Dr. Adithya CR', title: 'HOD CSE (AIML)' },
  {
    role: 'Faculty Coordinator',
    name: 'Dr. Varshitha DN',
    title: 'Associate Professor, CSE (AIML)',
  },
  { role: 'Student Coordinator', name: 'Prem S', title: 'Student Coordinator' },
  {
    role: 'Student Coordinator',
    name: 'Priyan S',
    title: 'Student Coordinator',
    phone: '95359 59000',
    tel: '9535959000',
  },
  {
    role: 'Student Coordinator',
    name: 'Shashank',
    title: 'Student Coordinator',
    phone: '866 064 9237',
    tel: '8660649237',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#home" aria-label="Hacktober, home">
          <img src="/images/vvce-emblem.png" alt="Vidyavardhaka College of Engineering emblem" />
          <span className="brand-name">
            Vidyavardhaka College
            <span>Mysore · CSE (AI &amp; ML)</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#event">The event</a>
          <a href="#people">Organisers</a>
          <a className="nav-register" href="#registration">Registration details</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow hero-kicker">Vidyavardhaka College of Engineering, Mysore</p>
            <h1 id="hero-title">
              Hack<span>tober</span>
            </h1>
            <p className="hero-subtitle">A Global Level Event</p>
            <p className="hero-tagline">Hack · Build · Connect · Compete</p>
            <p className="eyebrow hero-meta">Hosted by the Department of CSE (Artificial Intelligence &amp; Machine Learning)</p>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="orbit-stamp">One day.<br />Big ideas.</div>
            <div className="poster-frame">
              <img
                src="/images/hacktober-poster.png"
                alt="Original Hacktober event poster with date, venue, registration fee, event highlights and organisers"
                data-testid="img-event-poster"
              />
              <span className="poster-caption">The original event poster</span>
            </div>
          </div>
          <a className="hero-scroll" href="#event" aria-label="Scroll to event details">
            <span className="scroll-line" />
            <span>Explore the event</span>
            <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </section>

        <div className="ticker" aria-label="Hack, build, connect, compete">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>
                Hack <b>•</b> Build <b>•</b> Connect <b>•</b> Compete <b>•</b>
              </span>
            ))}
          </div>
        </div>

        <section className="section-wrap" id="event">
          <div className="intro-grid">
            <div>
              <p className="section-label">A campus gathering for makers</p>
              <h2 className="section-title">Make room for what you can make.</h2>
            </div>
            <p className="intro-copy">
              Hacktober is a <strong>collaborative event for innovators, creators and problem solvers.</strong>{' '}
              Bring your curiosity, find your team, and spend the day building alongside people who love
              technology as much as you do.
            </p>
          </div>

          <div className="fact-ribbon" aria-label="Event details">
            <div className="fact" data-testid="text-event-date">
              <span className="fact-index">01 / WHEN</span>
              <div>
                <span className="fact-value">October 14</span>
                <span className="fact-caption"><CalendarDays size={13} aria-hidden="true" /> A day to build</span>
              </div>
            </div>
            <div className="fact" data-testid="text-event-venue">
              <span className="fact-index">02 / WHERE</span>
              <div>
                <span className="fact-value">Sports Complex</span>
                <span className="fact-caption"><MapPin size={13} aria-hidden="true" /> VVCE, Mysore</span>
              </div>
            </div>
            <div className="fact" data-testid="text-registration-fee">
              <span className="fact-index">03 / ENTRY</span>
              <div>
                <span className="fact-value">₹200</span>
                <span className="fact-caption"><Coins size={13} aria-hidden="true" /> Registration fee</span>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-band" aria-labelledby="highlights-heading">
          <div className="feature-inner">
            <div className="feature-head">
              <div>
                <p className="section-label">A day with a little bit of everything</p>
                <h2 className="section-title" id="highlights-heading">Bring an idea.<br />Leave with momentum.</h2>
              </div>
              <p className="feature-head-note">A hands-on day for people who would rather make a thing than just talk about it.</p>
            </div>
            <div className="feature-list">
              {featureItems.map(({ number, title, body, icon: Icon }) => (
                <article className="feature-item" key={number}>
                  <span className="feature-number">{number}</span>
                  <div>
                    <h3><Icon size={17} strokeWidth={1.7} aria-hidden="true" /> {title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="feature-note">Team participation · team of 2</p>
          </div>
        </section>

        <section className="section-wrap collab-section" aria-labelledby="collab-heading">
          <div>
            <p className="section-label">Powered by collaboration</p>
            <h2 className="section-title" id="collab-heading">Different minds. One big build.</h2>
            <p className="collab-copy">
              Hacktober is a chance to meet new collaborators, trade perspectives and make something
              together. Come as a team of two; leave knowing more people who love to solve problems.
            </p>
          </div>
          <div className="collab-board">
            <p className="collab-board-label">Event collaboration</p>
            <div className="collab-marks">
              <span className="collab-brand">Hacktober</span>
              <span className="collab-x" aria-hidden="true">×</span>
              <span className="figma-lockup">
                <SiFigma className="figma-icon" aria-hidden="true" />
                <span className="collab-brand">Figma</span>
              </span>
            </div>
            <p className="collab-foot">With the Devfolio mark featured on the original poster</p>
            <img className="devfolio-mark" src="/images/devfolio-mark.png" alt="Devfolio mark from the supplied poster" />
          </div>
        </section>

        <section className="people-section" id="people">
          <div className="section-wrap">
            <div className="people-head">
              <div>
                <p className="section-label">The people behind the day</p>
                <h2 className="section-title">Made possible by this crew.</h2>
              </div>
              <p>Hosted by the Department of CSE (Artificial Intelligence &amp; Machine Learning), Vidyavardhaka College of Engineering.</p>
            </div>
            <div className="people-grid">
              {people.map((person, index) => (
                <article className="person" key={`${person.role}-${person.name}`} data-testid={`person-${index + 1}`}>
                  <span className="person-role">{person.role}</span>
                  <span className="person-name">{person.name}</span>
                  <span className="person-title">{person.title}</span>
                  {person.phone && person.tel && (
                    <a className="person-contact" href={`tel:${person.tel}`} data-testid={`link-call-${person.tel}`}>
                      {person.phone}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" id="registration" aria-labelledby="closing-heading">
          <p className="section-label">October 14 · Sports Complex</p>
          <h2 id="closing-heading">Be part of <span>something big.</span></h2>
          <p className="closing-copy">
            Gather a team of two, bring your problem-solving spirit, and meet a campus full of curious
            builders.
          </p>
          <div className="closing-facts">
            <div className="closing-fact"><strong>₹200</strong>Registration fee</div>
            <div className="closing-fact"><strong>2 people</strong>Team participation</div>
            <div className="closing-fact"><strong>Oct 14</strong>Sports Complex</div>
          </div>
          <p className="reg-note">
            <strong>Registration:</strong> The supplied poster does not include an active sign-up link.
            For details, contact a student coordinator above.
          </p>
        </section>
      </main>

      <footer className="footer">
        <span>Hacktober · Vidyavardhaka College of Engineering, Mysore</span>
        <span>Hosted by CSE (AI &amp; ML) <Code2 size={13} aria-hidden="true" /></span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;