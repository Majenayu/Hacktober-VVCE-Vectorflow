import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Phone,
  X,
} from 'lucide-react';
import { challengeTracks, eventWideChallenge, type Challenge } from './data/challenge-tracks';

const registrationUrl = 'https://forms.gle/zbao7r77jabpSMSw8';
const hacktoberfestUrl = 'https://hacktoberfest.com/';

const rules = [
  <>Participation is strictly limited to <strong>VVCE students</strong>.</>,
  <>Each team must have <strong>exactly two members</strong>. Inter-branch teams are permitted.</>,
  <>Both teammates must independently register on the official Hacktoberfest website.</>,
  <>Submit <strong>one internal Google Form per team</strong>, completed by one teammate on behalf of both.</>,
  <>Registration does not guarantee selection. Organizers shortlist based on submitted profiles, team information, and organizer criteria.</>,
  <>Evaluation considers both teammates' LinkedIn and GitHub profiles, the team description, relevant technical/project experience, and overall suitability.</>,
  <>Shortlisted teams must complete onboarding and follow organizer instructions by <strong>10 October 2026</strong>.</>,
  <>The fee is <strong>₹200 per team</strong>, not per person.</>,
  <>Plagiarism, false details, impersonation, or other rule violations may result in disqualification.</>,
  <>Organizers may change procedures, challenges, schedule, or rules when needed; important changes will be communicated.</>,
];

const coordinators = [
  { name: 'Prem S', phone: '99801 56432', tel: '9980156432' },
  { name: 'Priyan S', phone: '95359 59000', tel: '9535959000' },
  { name: 'Shashank', phone: '866 064 9237', tel: '8660649237' },
];

function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  useEffect(() => {
    if (!selectedChallenge) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedChallenge(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedChallenge]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash));
      if (target) window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const openChallenge = (challenge: Challenge) => setSelectedChallenge(challenge);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#home" aria-label="VVCE Vector Flow Club, back to home" data-testid="link-home">
          <img src="/images/vvce-emblem.png" alt="Vidyavardhaka College of Engineering emblem" />
          <span className="brand-name">
            Vector Flow Club
            <span>VVCE · Mysore</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#event" data-testid="link-nav-event">Event</a>
          <a href="#challenges" data-testid="link-nav-challenges">Challenges</a>
          <a href="#selection" data-testid="link-nav-selection">Selection</a>
          <a className="nav-register" href={registrationUrl} data-testid="link-nav-register">Register team <ArrowRight size={13} aria-hidden="true" /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">An official VVCE student event · Mysore</p>
            <h1 id="hero-title">
              Hacktober<span className="fest">fest.</span>
            </h1>
            <p className="hero-title-long" data-testid="text-event-name">Hacktoberfest Hack Day Mysore × Vector Flow Club</p>
            <p className="hero-tagline">
              Open-source collaboration. AI-assisted building. Two people, one focused day to make a useful thing.
            </p>
            <div className="hero-badges">
              <span className="hero-badge" data-testid="status-eligibility">VVCE students only</span>
              <span className="hero-badge" data-testid="text-team-size">Exactly 2 per team</span>
              <span className="hero-badge" data-testid="text-event-date">14 October 2026</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href={registrationUrl} data-testid="link-register-hero">
                Register Your Team <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#challenges" data-testid="link-explore-challenges">
                Explore challenges <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Event date and team details">
            <div className="event-stamp">VVCE<br />only<br />Mysore</div>
            <div className="poster-frame">
              <span className="poster-label">The build day</span>
              <div className="hero-date-card">
                <p className="micro-label">Save the date · Mysore</p>
                <p className="date-display">14<span>OCT</span></p>
                <div className="date-divider" />
                <p className="date-card-name">Hacktoberfest<br />Hack Day</p>
              <p className="date-card-host">Hosted by Vector Flow Club<br />Vidyavardhaka College of Engineering (VVCE), Mysore · Sports Complex</p>
              </div>
              <span className="poster-caption">Open-source · AI-assisted · Built together</span>
            </div>
          </div>
          <a className="hero-scroll" href="#event" data-testid="link-scroll-details">
            <i aria-hidden="true" /> Explore the details <ChevronRight size={14} aria-hidden="true" />
          </a>
        </section>

        <div className="ticker" aria-label="Build together, make it useful, share the work">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>Open source <b>×</b> Build together <b>×</b> Share the work <b>×</b></span>
            ))}
          </div>
        </div>

        <section className="section-wrap" id="event" aria-labelledby="event-heading">
          <div className="intro-grid">
            <div>
              <p className="section-kicker">The event, at a glance</p>
              <h2 className="section-title" id="event-heading">One day.<br />Two minds.<br />A real build.</h2>
            </div>
            <p className="intro-copy">
              <strong>Hacktoberfest Hack Day Mysore × Vector Flow Club</strong> is a hands-on event for VVCE students to collaborate, solve practical problems, and demonstrate what they can build. Pair up, work with open-source tools, and use AI-assisted development thoughtfully. Teams are reviewed and shortlisted before the event.
            </p>
          </div>
          <div className="fact-ribbon" aria-label="Key event information">
            <div className="fact" data-testid="text-event-date-detail">
              <span className="fact-index">01 / DATE</span>
              <div><span className="fact-value">14 October 2026</span><span className="fact-caption">Event day</span></div>
            </div>
            <div className="fact" data-testid="text-event-venue">
              <span className="fact-index">02 / VENUE</span>
              <div><span className="fact-value">Vidyavardhaka College of Engineering (VVCE)</span><span className="fact-caption">Sports Complex · Mysore</span></div>
            </div>
            <div className="fact" data-testid="text-registration-fee">
              <span className="fact-index">03 / FEE</span>
              <div><span className="fact-value">₹200</span><span className="fact-caption">Per team, not per person</span></div>
            </div>
            <div className="fact" data-testid="text-team-eligibility">
              <span className="fact-index">04 / TEAM</span>
              <div><span className="fact-value">2 VVCE students</span><span className="fact-caption">Inter-branch teams allowed</span></div>
            </div>
          </div>
          <div className="eligibility-note" data-testid="status-selection-not-guaranteed">
            <Check size={17} aria-hidden="true" />
            <span><strong>Selection is not automatic.</strong> Registration, evaluation, shortlisting, and selected-team onboarding are all completed by 10 October 2026. Applying does not guarantee selection.</span>
          </div>
        </section>

        <section className="section-wrap section-dark" aria-labelledby="about-heading">
          <div className="about-layout">
            <div>
              <p className="section-kicker">Why a Hack Day?</p>
              <h2 className="section-title" id="about-heading">Make ideas<br />work in the open.</h2>
            </div>
            <div>
              <p className="about-copy">
                A focused, team-based build experience: work through a challenge, collaborate across perspectives, and show a working solution. Bring curiosity and sound judgment to open-source collaboration and AI-assisted development. The work—and how your team thinks together—matters.
              </p>
              <div className="about-aside">
                <span className="big-number">02</span>
                <p><strong>Exactly two students per team.</strong> Build your pair from any branches at VVCE. Selection happens before event day; shortlisted teams receive confirmation and onboarding instructions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hacktober-section" aria-labelledby="hacktober-heading">
          <div className="hacktober-mark" aria-label="Hacktoberfest name, set in text">
            <span>Hacktoberfest<small>Official platform registration required</small></span>
          </div>
          <div className="hacktober-copy">
            <p className="section-kicker">Two registrations. Both required.</p>
            <h2 className="section-title" id="hacktober-heading">Your team signs up here.<br />Each builder signs up there.</h2>
            <p>Hacktoberfest is the open-source initiative connected to the spirit of this Hack Day. Each teammate must independently register on the official Hacktoberfest website as well as completing your team's internal event form.</p>
            <div className="required-callout" data-testid="status-two-registrations">
              <strong>Internal team registration alone is not enough.</strong> One teammate submits one internal form for the team; both members complete their own Hacktoberfest registration.
            </div>
            <a className="text-link" href={hacktoberfestUrl} target="_blank" rel="noopener noreferrer" data-testid="link-official-hacktoberfest">
              Visit official Hacktoberfest <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section-wrap section-dark" id="challenges" aria-labelledby="challenges-heading">
          <div className="challenge-head">
            <div>
              <p className="section-kicker">Domains &amp; challenges</p>
              <h2 className="section-title" id="challenges-heading">Two tracks.<br />Four partner challenges.</h2>
            </div>
            <p className="challenge-intro">Choose a direction, review the challenge criteria, and use the official participant resources grouped with each track.</p>
          </div>
          <div className="tracks">
            {challengeTracks.map((track) => (
              <article className="track-card" key={track.id} data-testid={`card-${track.id}`}>
                <div className="track-top">
                  <span className="track-label">{track.number}</span>
                  <h3 className="track-title">{track.title}</h3>
                  <p className="track-domain">{track.domain}</p>
                </div>
                <div className="track-content">
                  <div className="track-focus">
                    <h4>Track focus</h4>
                    <p>{track.focus}</p>
                  </div>
                  <div className="track-challenges">
                    <h4>Challenges</h4>
                    <div className="challenge-list">
                      {track.challenges.map((challenge) => (
                        <div className="challenge-entry" key={challenge.id}>
                          <button
                            className="challenge-button"
                            type="button"
                            onClick={() => openChallenge(challenge)}
                            aria-haspopup="dialog"
                            aria-label={`Read challenge criteria for ${challenge.title}`}
                            data-testid={`button-open-${challenge.id}`}
                          >
                            <span className="challenge-name">
                              <span>{challenge.number}</span>{challenge.title}
                            </span>
                            <span className="challenge-open" aria-hidden="true"><ArrowUpRight size={15} /></span>
                          </button>
                          <p className="challenge-summary">{challenge.summary}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="track-resources">
                    <h4>Participant resources</h4>
                    {track.challenges.map((challenge) => (
                      <div className="resource-group" key={`${challenge.id}-resources`}>
                        <h5>{challenge.title}</h5>
                        <ul className="resource-links">
                          {challenge.resources.map((resource) => (
                            <li key={resource.url}>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.label}<ExternalLink size={12} aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="event-wide-challenge" data-testid="event-wide-challenge">
            <span className="micro-label">Separate Hack Day-wide challenge</span>
            <h3>{eventWideChallenge.title}</h3>
            <p>{eventWideChallenge.description}</p>
            <p className="event-wide-note">{eventWideChallenge.note}</p>
          </aside>
        </section>

        <section className="section-wrap selection-section" id="selection" aria-labelledby="selection-heading">
          <div className="selection-grid">
            <div>
              <p className="section-kicker">How teams are selected</p>
              <h2 className="section-title" id="selection-heading">A clear path<br />to event day.</h2>
              <p className="selection-intro">Applications are reviewed before the Hack Day. Submit complete, accurate information for both teammates. Registration does not guarantee selection.</p>
            </div>
            <div className="rounds">
              <article className="round">
                <span className="round-num">ROUND 01</span>
                <div>
                  <h3>Team registration &amp; evaluation</h3>
                  <p>One teammate submits the internal form for a team of exactly two. Organizers review both people's profiles, your description, experience, and overall suitability.</p>
                  <div className="criteria-list">
                    <span>Both LinkedIn profiles</span><span>Both GitHub profiles</span><span>Team description</span><span>Relevant experience</span><span>Overall suitability</span>
                  </div>
                  <span className="deadline-tag">Evaluation complete by 10 October 2026</span>
                </div>
              </article>
              <article className="round">
                <span className="round-num">ROUND 02</span>
                <div>
                  <h3>Shortlisting &amp; onboarding</h3>
                  <p>Shortlisted teams receive confirmation and onboarding instructions. Selected teams must complete onboarding on time to prepare for the in-person event.</p>
                  <span className="deadline-tag">Confirmation &amp; onboarding by 10 October 2026</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrap register-section" id="registration" aria-labelledby="registration-heading">
          <div className="register-side">
            <p className="section-kicker">Registration, step by step</p>
            <h2 className="section-title" id="registration-heading">Do this<br />as a team.</h2>
            <div className="register-panel">
              <span className="micro-label">One form per team · before 10 October 2026</span>
              <h3>Register your team</h3>
              <p>Have both teammates' details ready. One member completes the internal Google Form on behalf of the pair.</p>
              <a className="button button-primary" href={registrationUrl} data-testid="link-register-now">
                Register Now <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <span className="register-warning">Registration is reviewed; submission does not guarantee selection.</span>
            </div>
          </div>
          <div className="steps" aria-label="Registration steps">
            <article className="step" data-testid="step-internal-registration">
              <h3>Internal team form</h3>
              <p>One teammate submits the official event Google Form for both members. One submission per team.</p>
            </article>
            <article className="step" data-testid="step-hacktoberfest">
              <h3>Both register individually</h3>
              <p>Each person independently completes registration at <a href={hacktoberfestUrl} target="_blank" rel="noopener noreferrer" data-testid="link-hacktoberfest-step">hacktoberfest.com</a>. Both are required.</p>
            </article>
            <article className="step" data-testid="step-evaluation">
              <h3>Application evaluation</h3>
              <p>Organizers review both LinkedIn and GitHub profiles, your team description, relevant technical/project experience, and overall suitability.</p>
            </article>
            <article className="step" data-testid="step-shortlisting">
              <h3>Shortlist &amp; onboard</h3>
              <p>Selected teams receive confirmation and onboarding instructions. Complete the process by 10 October 2026.</p>
            </article>
            <article className="step" data-testid="step-event-day">
              <h3>Build at VVCE</h3>
              <p>Shortlisted teams meet at the Sports Complex, Vidyavardhaka College of Engineering (VVCE), Mysore, on 14 October 2026.</p>
            </article>
          </div>
        </section>

        <section className="section-wrap benefit-section" id="rewards" aria-labelledby="rewards-heading">
          <div className="benefit-grid">
            <div>
              <p className="section-kicker">Your team entry</p>
              <h2 className="section-title" id="rewards-heading">₹200 gets<br />your team in.</h2>
              <p className="intro-copy">The fee is ₹200 per team—not per person. Take part in the Hack Day and share your work with the community.</p>
              <div className="fee-note" data-testid="text-fee-team"><strong>₹200</strong><span>per team<br />two members</span></div>
            </div>
            <div className="benefits" data-testid="list-participant-benefits">
              <div className="benefit"><strong>Participation</strong><span>Join the selected teams building at the event.</span></div>
              <div className="benefit"><strong>Working-solution demo</strong><span>Opportunity to demonstrate what your team makes.</span></div>
              <div className="benefit"><strong>E-certificate</strong><span>For participants.</span></div>
              <div className="benefit"><strong>Snacks &amp; refreshments</strong><span>Provided during the event.</span></div>
              <div className="benefit"><strong>Stickers &amp; goodies</strong><span>Event goodies for participants.</span></div>
              <div className="benefit"><strong>Recognition</strong><span>Outstanding teams may be recognized.</span></div>
              <div className="benefit"><strong>Prize opportunity</strong><span>Top-performing team gets the main reward.</span></div>
              <div className="benefit"><strong>Event merchandise</strong><span>Top teams may receive exclusive swag.</span></div>
            </div>
          </div>
          <aside className="reward-banner" data-testid="status-prizes-announcement">
            <div className="reward-copy">
              <span className="micro-label">Recognition &amp; rewards</span>
              <h3>Make it. Show it. Be remembered.</h3>
              <p>The top-performing team receives the main reward. Top teams may receive exclusive event merchandise; winning/top-team swag such as T-shirts is subject to the final reward structure. Prize pool and final distribution are to be announced.</p>
            </div>
            <div className="prize-placeholder"><strong>To be<br />announced</strong><span>Prize pool &amp;<br />distribution</span></div>
          </aside>
        </section>

        <section className="section-wrap timeline" id="timeline" aria-labelledby="timeline-heading">
          <p className="section-kicker">Important timeline</p>
          <h2 className="section-title" id="timeline-heading">Before the build,<br />there's a shortlist.</h2>
          <div className="timeline-track" data-testid="list-event-timeline">
            <article className="timeline-item"><span>BEFORE 10 OCT 2026</span><h3>Apply as a team</h3><p>Submit one internal application for two VVCE students.</p></article>
            <article className="timeline-item"><span>BY 10 OCT 2026</span><h3>Evaluation &amp; shortlist</h3><p>Application review and shortlisting completed.</p></article>
            <article className="timeline-item"><span>BY 10 OCT 2026</span><h3>Selected-team onboarding</h3><p>Shortlisted teams complete onboarding.</p></article>
            <article className="timeline-item"><span>14 OCT 2026</span><h3>Hack Day at VVCE</h3><p>Meet at the Sports Complex, Vidyavardhaka College of Engineering (VVCE), Mysore.</p></article>
          </div>
        </section>

        <section className="section-wrap" id="rules" aria-labelledby="rules-heading">
          <div className="rules-layout">
            <div className="rules-intro">
              <p className="section-kicker">A few things to know</p>
              <h2 className="section-title" id="rules-heading">Rules &amp;<br />regulations.</h2>
              <p>Read before applying. Organizers will communicate important changes to participants.</p>
            </div>
            <ol className="rules-list" data-testid="list-event-rules">
              {rules.map((rule, index) => <li key={`rule-${index + 1}`} data-testid={`text-rule-${index + 1}`}>{rule}</li>)}
            </ol>
          </div>
        </section>

        <section className="section-wrap contacts" id="contact" aria-labelledby="contact-heading">
          <div className="contacts-head">
            <div>
              <p className="section-kicker">Student coordinators</p>
              <h2 className="section-title" id="contact-heading">Need a hand?</h2>
            </div>
            <p>Questions about registration or running into an issue? Reach out to a student coordinator.</p>
          </div>
          <div className="contact-grid">
            {coordinators.map(({ name, phone, tel }) => (
              <article className="contact-card" key={tel} data-testid={`card-coordinator-${tel}`}>
                <span className="contact-role">Student coordinator</span>
                <strong className="contact-name">{name}</strong>
                <a className="contact-phone" href={`tel:${tel}`} data-testid={`link-call-${tel}`}>
                  <Phone size={14} aria-hidden="true" /> {phone}
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/images/vvce-emblem.png" alt="VVCE emblem" />
          <div><strong>Hacktoberfest Hack Day Mysore</strong><span>× Vector Flow Club · VVCE · 14 October 2026</span></div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#challenges" data-testid="link-footer-challenges">Challenges</a>
          <a href="#selection" data-testid="link-footer-selection">Selection</a>
          <a href="#registration" data-testid="link-footer-registration">Registration</a>
          <a href="#rewards" data-testid="link-footer-rewards">Rewards</a>
          <a href="#rules" data-testid="link-footer-rules">Rules</a>
          <a href="#contact" data-testid="link-footer-contact">Contact</a>
        </nav>
        <a className="footer-register" href={registrationUrl} data-testid="link-footer-register">Register your team <ArrowUpRight size={12} aria-hidden="true" /></a>
      </footer>

      {selectedChallenge && (
        <div
          className="challenge-dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedChallenge(null);
          }}
        >
          <section
            className="challenge-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="challenge-dialog-title"
            aria-describedby="challenge-detail-description"
            data-testid="dialog-challenge-details"
            onKeyDown={(event) => {
              if (event.key === 'Tab') {
                event.preventDefault();
                (event.currentTarget.querySelector('button') as HTMLButtonElement | null)?.focus();
              }
            }}
          >
            <button className="dialog-close" type="button" onClick={() => setSelectedChallenge(null)} aria-label="Close challenge details" autoFocus data-testid="button-close-challenge">
              <X size={18} aria-hidden="true" />
            </button>
            <p className="section-kicker">{selectedChallenge.trackTitle} · {selectedChallenge.number}</p>
            <h2 id="challenge-dialog-title">{selectedChallenge.title}</h2>
            <p className="challenge-detail-description" id="challenge-detail-description">{selectedChallenge.description}</p>
            <div className="challenge-judging">
              <h3>What the judges will look for</h3>
              <p>{selectedChallenge.judging}</p>
            </div>
            <div className="modal-resources">
              <h3>Participant resources</h3>
              <ul className="resource-links">
                {selectedChallenge.resources.map((resource) => (
                  <li key={resource.url}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.label}<ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;