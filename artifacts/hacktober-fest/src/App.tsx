import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  Cpu,
  ExternalLink,
  Menu,
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
  <>Every registrant or participant is eligible for the participant-wide Render credits. <strong>DigitalOcean credits are for shortlisted participants, and Arduino boards are for the eight best teams.</strong></>,
  <>Registration does not guarantee selection. Organizers shortlist based on submitted profiles, team information, and organizer criteria.</>,
  <>Evaluation considers both teammates' LinkedIn and GitHub profiles, the team description, relevant technical/project experience, and overall suitability.</>,
  <>Shortlisted teams must complete onboarding and follow organizer instructions by <strong>10 October 2026</strong>.</>,
  <>The participation fee is collected only after shortlisting; applicants do not pay when they submit their initial registration.</>,
  <>Plagiarism, false details, impersonation, or other rule violations may result in disqualification.</>,
  <>Organizers may change procedures, challenges, schedule, or rules when needed; important changes will be communicated.</>,
];

type EventContact = {
  id: string;
  role: string;
  name: string;
  affiliation?: string;
  phone?: string;
  tel?: string;
};

const eventContacts: EventContact[] = [
  { id: 'patron', role: 'Patron', name: 'Dr. B. Sadashive Gowda', affiliation: 'Principal, VVCE' },
  { id: 'convener', role: 'Convener', name: 'Dr. Adithya CR', affiliation: 'HOD, CSE (AIML)' },
  { id: 'faculty-coordinator', role: 'Faculty Coordinator', name: 'Dr. Varshitha DN', affiliation: 'Associate Professor, CSE (AIML)' },
  { id: 'latha-du', role: 'Faculty Coordinator', name: 'Latha DU' },
  { id: 'prashanth-n', role: 'Faculty Coordinator', name: 'Prashanth N' },
  { id: 'sujan', role: 'Student Coordinator', name: 'Sujan', phone: '80884 25263', tel: '8088425263' },
  { id: 'nagasiri', role: 'Student Coordinator', name: 'Nagasiri', phone: '79759 77430', tel: '7975977430' },
  { id: 'chiranthan', role: 'Student Coordinator', name: 'Chiranthan', phone: '74837 18119', tel: '7483718119' },
];

type DayScheduleActivity = {
  title: string;
  time?: string;
};

type DayScheduleEntry = {
  id: string;
  time: string;
  title?: string;
  activities?: DayScheduleActivity[];
  highlight?: boolean;
};

const finalDaySchedule: DayScheduleEntry[] = [
  { id: 'check-in', time: '9:00 AM – 9:30 AM', title: 'Registration and Check-in' },
  { id: 'opening', time: '9:30 AM – 10:00 AM', title: 'Welcome and Opening Ceremony' },
  { id: 'briefing', time: '10:00 AM – 10:30 AM', title: 'Hack Day Introduction and Briefing' },
  { id: 'hackathon-start', time: '10:30 AM', title: 'Hackathon Starts', highlight: true },
  { id: 'checkpoint-one', time: '12:00 PM – 1:00 PM', title: 'Checkpoint 1 – Project Development' },
  { id: 'lunch', time: '1:00 PM – 2:00 PM', title: 'Lunch Break' },
  { id: 'checkpoint-two', time: '2:30 PM – 4:00 PM', title: 'Checkpoint 2 – Project Development' },
  {
    id: 'four-pm-sessions',
    time: '4:00 PM',
    activities: [
      { title: 'Refreshment and Break' },
      { time: '4:00 PM – 4:30 PM', title: 'Judging and Project Evaluation' },
    ],
  },
  {
    id: 'winners',
    time: '5:00 PM – 5:30 PM',
    title: 'Winner Announcement, Prize Distribution and Ceremony',
    highlight: true,
  },
];

function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!selectedChallenge) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedChallenge(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedChallenge]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>([
      '.intro-grid > *',
      '.fact',
      '.eligibility-note',
      '.about-layout > *',
      '.hacktober-mark',
      '.hacktober-copy',
      '.challenge-head > *',
      '.track-card',
      '.event-wide-challenge',
      '.selection-grid > :first-child',
      '.round',
      '.register-side',
      '.step',
      '.benefit-grid > :first-child',
      '.benefit',
      '.reward-banner',
      '.swag-drop',
      '.timeline-item',
      '.schedule-heading > *',
      '.day-schedule-item',
      '.rules-intro',
      '.rules-list li',
      '.contacts-head > *',
      '.contact-card',
    ].join(', ')));
    if (items.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const item = entry.target as HTMLElement;
        item.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: '-8% 0px -8% 0px' });

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-index', String(index % 4));
      item.classList.add('reveal-item');
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hero = document.querySelector<HTMLElement>('.hero');
    const pointerCards = Array.from(document.querySelectorAll<HTMLElement>('.track-card, .contact-card'));
    let frame = 0;

    const moveHeroWithPointer = (event: PointerEvent) => {
      if (!hero || event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        hero.style.setProperty('--hero-orb-x', `${(x * 28).toFixed(1)}px`);
        hero.style.setProperty('--hero-orb-y', `${(y * 18).toFixed(1)}px`);
        hero.style.setProperty('--hero-poster-x', `${(x * -9).toFixed(1)}px`);
        hero.style.setProperty('--hero-poster-y', `${(y * -6).toFixed(1)}px`);
      });
    };

    const resetHeroPointer = () => {
      window.cancelAnimationFrame(frame);
      hero?.style.setProperty('--hero-orb-x', '0px');
      hero?.style.setProperty('--hero-orb-y', '0px');
      hero?.style.setProperty('--hero-poster-x', '0px');
      hero?.style.setProperty('--hero-poster-y', '0px');
    };

    const removeCardListeners = pointerCards.map((card) => {
      const moveSpotlight = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--card-pointer-x', `${(event.clientX - bounds.left).toFixed(1)}px`);
        card.style.setProperty('--card-pointer-y', `${(event.clientY - bounds.top).toFixed(1)}px`);
        card.classList.add('pointer-active');
      };
      const clearSpotlight = () => card.classList.remove('pointer-active');

      card.addEventListener('pointermove', moveSpotlight, { passive: true });
      card.addEventListener('pointerleave', clearSpotlight);
      return () => {
        card.removeEventListener('pointermove', moveSpotlight);
        card.removeEventListener('pointerleave', clearSpotlight);
      };
    });

    hero?.addEventListener('pointermove', moveHeroWithPointer, { passive: true });
    hero?.addEventListener('pointerleave', resetHeroPointer);

    return () => {
      window.cancelAnimationFrame(frame);
      hero?.removeEventListener('pointermove', moveHeroWithPointer);
      hero?.removeEventListener('pointerleave', resetHeroPointer);
      removeCardListeners.forEach((removeListeners) => removeListeners());
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash));
      if (!target) return;
      const topbar = document.querySelector<HTMLElement>('.topbar');
      const targetTop = target.getBoundingClientRect().top + window.scrollY - (topbar?.offsetHeight ?? 0) - 12;
      window.scrollTo({ top: targetTop, behavior: 'instant' });
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
        <nav className={`nav-links${menuOpen ? ' nav-links-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          <a href="#event" onClick={() => setMenuOpen(false)} data-testid="link-nav-event">Event</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)} data-testid="link-nav-schedule">Schedule</a>
          <a href="#challenges" onClick={() => setMenuOpen(false)} data-testid="link-nav-challenges">Challenges</a>
          <a href="#selection" onClick={() => setMenuOpen(false)} data-testid="link-nav-selection">Selection</a>
          <a href="#registration" onClick={() => setMenuOpen(false)} data-testid="link-nav-registration">Registration</a>
          <a href="#rules" onClick={() => setMenuOpen(false)} data-testid="link-nav-rules">Rules</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} data-testid="link-nav-contact">Contact</a>
          <a className="nav-register" href={registrationUrl} onClick={() => setMenuOpen(false)} data-testid="link-nav-register">Register team <ArrowRight size={13} aria-hidden="true" /></a>
        </nav>
        <button
          className="nav-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-nav-toggle"
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Global-Level Hacktoberfest Hackathon · VVCE Campus Edition · Mysore</p>
            <h1 id="hero-title">
              Hacktober<span className="fest">fest.</span>
            </h1>
            <p className="hero-title-long" data-testid="text-event-name">Hacktoberfest Hack Day Mysore × Vector Flow Club</p>
            <p className="hero-tagline">
              Take part in a global-level Hacktoberfest hackathon at VVCE Mysore. Build in a team of two, collaborate with AI thoughtfully, and make something useful in one focused day.
            </p>
            <div className="hero-badges">
              <span className="hero-badge" data-testid="status-eligibility">VVCE students only</span>
              <span className="hero-badge" data-testid="text-team-size">Exactly 2 per team</span>
              <span className="hero-badge">Two registrations required</span>
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
              <strong>Hacktoberfest Hack Day Mysore × Vector Flow Club</strong> brings a global-level Hacktoberfest hackathon experience to VVCE Mysore. This in-person campus edition is open to VVCE students, who compete in teams to solve practical problems and demonstrate what they can build with open-source tools and thoughtful AI assistance. Teams are reviewed and shortlisted before the event.
            </p>
          </div>
          <div className="fact-ribbon" aria-label="Key event information">
            <div className="fact" data-testid="text-event-date-detail">
              <span className="fact-index">01 / DATE</span>
              <div><span className="fact-value">14 October 2026</span><span className="fact-caption">Event day</span></div>
            </div>
            <div className="fact" data-testid="text-event-venue">
              <span className="fact-index">02 / VENUE</span>
              <div><span className="fact-value">VVCE Sports Complex</span><span className="fact-caption">Vidyavardhaka College of Engineering · Mysore</span></div>
            </div>
            <div className="fact" data-testid="text-event-selection">
              <span className="fact-index">03 / SELECTION</span>
              <div><span className="fact-value">Shortlist first</span><span className="fact-caption">Teams are confirmed before the event</span></div>
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
            <p className="section-kicker">Global-level hackathon · VVCE campus edition</p>
            <h2 className="section-title" id="hacktober-heading">Your team signs up here.<br />Each builder signs up there.</h2>
            <p>Hacktoberfest is a global open-source event with participants around the world. The VVCE Campus Edition brings that global-level hackathon experience to Mysore; this in-person competition is limited to VVCE students. Each teammate must independently register on the official Hacktoberfest website, in addition to one internal Google Form per team.</p>
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
              <span className="micro-label">Two required registrations · one internal form per team</span>
              <h3>Register your team</h3>
              <p>One teammate submits the event form for both people. Then each teammate registers separately on the official Hacktoberfest website.</p>
              <a className="button button-primary" href={registrationUrl} data-testid="link-register-now">
                Register Team Form <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href={hacktoberfestUrl} target="_blank" rel="noopener noreferrer" data-testid="link-register-hacktoberfest">
                Register on Hacktoberfest <ExternalLink size={14} aria-hidden="true" />
              </a>
              <p className="register-swag-note" data-testid="status-swag-eligibility">
                <strong>Some rewards are open to everyone.</strong> All registrants and participants are eligible for Render credits. DigitalOcean credits are for shortlisted participants; Arduino boards go to the eight best teams.
              </p>
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
              <p>Only shortlisted teams receive confirmation and onboarding instructions. After shortlisting, the <strong>₹200 fee is payable per team</strong>, not per person. Complete onboarding by 10 October 2026.</p>
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
              <p className="section-kicker">Recognition &amp; rewards</p>
              <h2 className="section-title" id="rewards-heading">₹30,000<br />prize pool.</h2>
              <p className="intro-copy">Compete for the ₹30,000 prize pool and trophies. Render credits are open to all registrants and participants; shortlisted participants receive DigitalOcean credits, and Arduino boards go to the eight best teams.</p>
              <div className="prize-total" data-testid="text-prize-pool"><strong>₹30,000</strong><span>total prize<br />pool</span></div>
            </div>
            <div className="benefits" data-testid="list-participant-benefits">
              <div className="benefit"><strong>Participation</strong><span>Join the selected teams building at the event.</span></div>
              <div className="benefit"><strong>Working-solution demo</strong><span>Opportunity to demonstrate what your team makes.</span></div>
              <div className="benefit"><strong>E-certificate</strong><span>For participants.</span></div>
              <div className="benefit"><strong>Snacks &amp; refreshments</strong><span>Provided during the event.</span></div>
              <div className="benefit"><strong>Trophies &amp; recognition</strong><span>Special recognition for outstanding teams.</span></div>
              <div className="benefit"><strong>DigitalOcean credits</strong><span>₹2,500 in cloud credits for every shortlisted participant.</span></div>
              <div className="benefit"><strong>Special prizes</strong><span>Additional prizes for standout solutions.</span></div>
              <div className="benefit"><strong>Arduino boards</strong><span>One board for each of the eight best teams.</span></div>
            </div>
          </div>
          <section className="swag-drop" aria-labelledby="swag-drops-heading" data-testid="panel-swag-drop">
            <div className="swag-drop-heading">
              <div>
                <p className="section-kicker">Participant-first perks</p>
                <h3 className="section-title" id="swag-drops-heading">Swag drops.<br />Built to reward.</h3>
              </div>
              <div className="swag-drop-intro">
                <p>Rewards have different eligibility: Render credits are for every registrant and participant, DigitalOcean credits are for shortlisted participants, and Arduino boards are for the eight best teams.</p>
                <a className="button button-primary" href={registrationUrl} data-testid="link-swag-register">
                  Register your team <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="swag-cards" data-testid="list-swag-drops">
              <article className="swag-card swag-card-featured" data-testid="card-swag-render-credits">
                <div className="swag-card-meta"><span>Drop 01 · Live</span><Cloud size={19} aria-hidden="true" /></div>
                <p className="swag-card-value">₹5,000</p>
                <h4>Render credits</h4>
                <p>Our first announced drop. Swag eligibility is open to every registrant and participant—no shortlisting required.</p>
                <span className="swag-card-status">For every registrant</span>
              </article>
              <article className="swag-card swag-card-upcoming" data-testid="card-swag-arduino-boards">
                <div className="swag-card-meta"><span>Drop 02 · Top 8 teams</span><Cpu size={19} aria-hidden="true" /></div>
                <p className="swag-card-value">8 boards</p>
                <h4>Arduino boards</h4>
                <p>One Arduino board for each of the eight best teams.</p>
                <span className="swag-card-status">For the eight best teams</span>
              </article>
              <article className="swag-card swag-card-upcoming" data-testid="card-swag-digitalocean-credits">
                <div className="swag-card-meta"><span>Drop 03 · Shortlisted</span><Cloud size={19} aria-hidden="true" /></div>
                <p className="swag-card-value">₹2,500</p>
                <h4>DigitalOcean cloud credits</h4>
                <p>Every shortlisted participant receives ₹2,500 in DigitalOcean cloud credits.</p>
                <span className="swag-card-status">For shortlisted participants</span>
              </article>
            </div>
            <p className="swag-drop-note">Hack Day participation still follows the separate team review and shortlisting process.</p>
          </section>
          <aside className="reward-banner" data-testid="status-prizes-announcement">
            <div className="reward-copy">
              <span className="micro-label">For top-performing teams</span>
              <h3>Make it. Show it. Be remembered.</h3>
              <p>The ₹30,000 prize pool and trophies recognize standout solutions. Render credits are open to all registrants and participants; DigitalOcean credits go to shortlisted participants, and Arduino boards go to the eight best teams.</p>
            </div>
            <div className="prize-placeholder"><strong>₹30,000</strong><span>Total prize<br />pool</span></div>
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

        <section className="section-wrap day-schedule-section" id="schedule" aria-labelledby="day-schedule-heading">
          <div className="schedule-heading">
            <div>
              <p className="section-kicker">Hack Day · 14 October 2026</p>
              <h2 className="section-title" id="day-schedule-heading">The day,<br />hour by hour.</h2>
            </div>
            <p className="schedule-intro">
              <strong>VVCE Sports Complex</strong><br />
              Vidyavardhaka College of Engineering · Mysore
            </p>
          </div>
          <ol className="day-schedule-list" data-testid="list-final-day-schedule">
            {finalDaySchedule.map((entry) => (
              <li
                className={`day-schedule-item${entry.highlight ? ' day-schedule-item-highlight' : ''}`}
                key={entry.id}
                data-testid={`schedule-${entry.id}`}
                data-schedule-reveal
              >
                <time className="day-schedule-time">{entry.time}</time>
                <div className="day-schedule-details">
                  {entry.title && <h3>{entry.title}</h3>}
                  {entry.activities && (
                    <>
                      <span className="schedule-concurrent-label">Concurrent activities · both begin at 4:00 PM</span>
                      <div className="schedule-parallel">
                        {entry.activities.map((activity) => (
                          <article className="schedule-parallel-item" key={activity.title}>
                            {activity.time && <time className="schedule-activity-time">{activity.time}</time>}
                            <h3>{activity.title}</h3>
                          </article>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-wrap" id="rules" aria-labelledby="rules-heading">
          <div className="rules-layout">
            <div className="rules-intro">
              <p className="section-kicker">A few things to know</p>
              <h2 className="section-title" id="rules-heading">Rules &amp;<br />regulations.</h2>
              <p>Read before applying. Organizers will communicate important changes to participants.</p>
            </div>
            <ol className="rules-list" data-testid="list-event-rules">
              {rules.map((rule, index) => <li key={`rule-${index + 1}`} data-testid={`text-rule-${index + 1}`}><span className="rule-text">{rule}</span></li>)}
            </ol>
          </div>
        </section>

        <section className="section-wrap contacts" id="contact" aria-labelledby="contact-heading">
          <div className="contacts-head">
            <div>
              <p className="section-kicker">Event leadership</p>
              <h2 className="section-title" id="contact-heading">Organizers &amp;<br />coordinators.</h2>
            </div>
            <p>The Hack Day is supported by VVCE leadership, faculty, and student coordinators. Contact a student coordinator with questions.</p>
          </div>
          <div className="contact-grid">
            {eventContacts.map(({ id, role, name, affiliation, phone, tel }) => (
              <article className="contact-card" key={id} data-testid={`card-contact-${id}`}>
                <span className="contact-role">{role}</span>
                <strong className="contact-name">{name}</strong>
                {affiliation && <span className="contact-affiliation">{affiliation}</span>}
                {phone && tel && (
                  <a className="contact-phone" href={`tel:${tel}`} data-testid={`link-call-${tel}`}>
                    <Phone size={14} aria-hidden="true" /> {phone}
                  </a>
                )}
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
          <a href="#schedule" data-testid="link-footer-schedule">Day schedule</a>
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