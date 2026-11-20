import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Accessibility, Lightbulb, Database, Palette,
  Monitor, Braces, ExternalLink, GraduationCap, BriefcaseBusiness,
  Sparkles, ChevronRight
} from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'Kimply',
    type: 'MULTIPLAYER GAME · SYSTEMS ARCHITECTURE · DEVELOPER',
    summary: 'A competitive memory game where players repeat increasingly long sequences, manage limited lives and compete in an asynchronous Battle Royale experience.',
    role: 'Systems Architect & Developer', 
    stack: ['React', 'JavaScript', 'Meteor', 'MongoDB'],
    details: [
      'Worked on the system architecture for a collaborative software project.',
      'Considered MVC, a functional React approach with publish-subscribe, and a serverless event-driven approach.',
      'Contributed to thinking about how frontend gameplay, backend services and game-state updates fit together.',
      'Worked on the frontend and backend development for the game by implementing key requirements such as sequence generation, sequence replay and asynchronous gameplay.'
    ],
    learning: 'The project required careful consideration of how players progress through the same game while taking turns asynchronously. Clear player status, consistent round progression and reliable state updates help keep the experience understandable and fair.',
    
    evidenceLinks: [
      { label: 'View Kimply on GitHub', url: 'https://github.com/Monash-FIT3170/2026W1-Kimply' }
    ],
    accent: 'violet',
    icon: 'layers'
  },
  {
    number: '02',
    name: 'Ticket to Ride',
    type: 'OBJECT-ORIENTED DESIGN · DESKTOP GAMES',
    summary: 'Interactive game project exploring how game rules and domain concepts can be translated into clear object-oriented structures and collaborating components.',
    role: 'Developer & Documentation writer',
    stack: ['Java', 'Java Swing', 'Maven', 'Javadoc'],
    details: [
      'Applied object-oriented principles to represent game entities, rules and behaviour.',
      'Used Java and Java Swing to support interactive desktop gameplay.',
      'Worked with Maven as part of the project build and dependency-management workflow.',
      'Documented code with Javadoc and communicated design through class diagrams and design rationales.',
      'Evaluated design alternatives, including documenting an earlier design that was later discarded.'
    ],
    learning: 'This project strengthened my understanding of organising code around clear responsibilities, keeping components understandable and communicating why a particular design was selected.',
    
    evidenceLinks: [
      { label: 'View project documentation', url: 'https://drive.google.com/drive/folders/1lTg6btJCEWBD8JKpvFPBrWOkHyaIsouc?usp=sharing' }
    ],
    accent: 'cyan',
    icon: 'code'
  },
  {
    number: '03',
    name: 'Data Visualisation',
    type: 'DATA STORYTELLING · TABLEAU',
    summary: 'A visual data story exploring Australian public library borrowing, memberships and digital engagement, with a focus on NSW and Victoria.',
    role: 'Data Visualisation Specialist',
    stack: ['Tableau', 'Public Data', 'Data Storytelling'],
    details: [
      'Developed a data story using public library statistics, with a focus on NSW and Victoria.',
      'Explored datasets across multiple sources and did data wrangling before using the data in charts',
      'Designed a vertically structured narrative for a general Australian audience, using multiple visualisations.'
    ],
    learning: 'This project developed my ability to work with both structured and unstructured datasets, consider the audience for an analytical product and use visual encoding and layout to communicate patterns.',
    accent: 'violet',
    icon: 'chart'
  },
  {
    number: '04',
    name: 'Data Visualisation',
    type: 'INTERACTIVE VISUALISATION · VEGA-LITE',
    summary: 'An interactive exploration of Australian government spending, beginning with spending categories before comparing Australia with other countries.',
    role: 'Data Visualisation Specialist',
    stack: ['Vega-Lite', 'JavaScript', 'HTML', 'CSS'],
    details: [
      'Designed a story that begins with Australian government spending categories and then compares Australia with other countries.',
      'Worked with country-level data and prepared country identifiers for reliable data matching.',
      'Planned a mix of map, advanced and standard visualisation idioms to support comparison and exploration.'
    ],
    learning: 'The project combines data preparation, interactive visualisation and narrative structure to make government spending easier to explore.',
   
    evidenceLinks: [
      { label: 'View live data visualisation', url: 'https://layela3.github.io/Data-Visualisation/' }
    ],
    accent: 'cyan',
    icon: 'globe'
  }
];

const skills = [
  { title: 'Languages', text: 'Java · Python ·  JavaScript  · MATLAB', icon: Braces },
  { title: 'Web & UI', text: 'React · HTML · CSS · Java Swing', icon: Monitor },
  { title: 'Backend & data', text: 'Meteor · MongoDB · SQL concepts', icon: Database },
  { title: 'Visualisation', text: 'Tableau · Vega-Lite', icon: Palette },
  { title: 'Engineering', text: 'Object-oriented design · architecture · documentation · security', icon: Layers3 },
  { title: 'Tools', text: 'Git/GitHub  · Vs Code  · Docker · Jira · Intellij · ClickUp · Drawio · Node', icon: Code2 }
];

function SectionHeading({ eyebrow, title, intro }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>;
}

function ProjectIcon({ type }) {
  if (type === 'code') return <Code2 />;
  if (type === 'chart') return <Palette />;
  if (type === 'globe') return <Layers3 />;
  return <Layers3 />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact']];

  return (
    <>
      <style>{`
        html { font-size: 14px; }
        body { font-size: 1.0rem; }
        .site-shell { font-size: 1.05rem; }
        .site-shell p, .site-shell li, .site-shell a,
        .site-shell button, .site-shell small,
        .site-shell .tag, .site-shell .eyebrow,
        .site-shell .project-type, .site-shell .meta-label {
          font-size: 1.0rem;
        }
          /* Keep the portfolio tagline comfortably inside the circular hero mark. */
          .site-shell .visual-core small {
          display: block;
          max-width: 175px;
          margin: 14px auto 0;
          font-size: 0.82rem;
          line-height: 1.5;
          letter-spacing: 0.12em;
          text-align: center;
          white-space: normal;
        }
      `}</style>
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">LM</span>
          <span>LAYELA MOYO<span className="brand-sub"></span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-line"><span className="status-dot" /> SOFTWARE ENGINEERING · MONASH UNIVERSITY</div>
            <h1>Building useful<br />software with <em>purpose.</em></h1>
            <p className="hero-lead">I'm Layela, a Software Engineering undergraduate interested in creating practical, accessible and thoughtfully engineered digital experiences. I am also exploring data engineering and the practicality of keeping data secure in this day and age.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">FOCUS</span><strong>Software · Design · Data</strong></div>
              <div><span className="meta-label">BASED IN</span><strong>Melbourne, Australia</strong></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract decorative technology graphic">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-orbit orbit-c" />
            <div className="visual-core"><span>LM</span><small>ENGINEERING<br/>WITH INTENTION</small></div>
            <div className="float-chip chip-one"><Code2 size={15}/> Code</div>
            <div className="float-chip chip-two"><Layers3 size={15}/> Data & Architecture</div>
            <div className="float-chip chip-three"><Sparkles size={15}/> User-first</div>
            <div className="visual-index">PORTFOLIO / 2026</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / PROFILE" title="A thoughtful approach to engineering." />
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">I enjoy understanding the problem behind a feature, not just implementing it.</p>
              <p>My project experience spans frontend development, object-oriented design, collaborative software architecture, data visualisation and data management. I'm interested in how people use technology, how components fit together, and how design decisions affect maintainability and reliability.</p>
              <p>I bring curiosity, creativity, structured problem-solving and a user-centred mindset to the way I approach software projects.</p>
            </div>
            <div className="principles">
              <article><span className="principle-icon"><Code2 /></span><div><h3>Technical breadth</h3><p>Experience across programming, frontend, backend and visualisation tools.</p></div></article>
              <article><span className="principle-icon"><Accessibility /></span><div><h3>User-centred thinking</h3><p>An interest in usability, accessibility and intuitive software. User-centred Design Principles and Software Usability.</p></div></article>
              <article><span className="principle-icon"><BriefcaseBusiness /></span><div><h3>Collaborative delivery</h3><p>Team projects, architecture discussions, stakeholder communication and User Acceptance Testing.</p></div></article>
              <article><span className="principle-icon"><Lightbulb /></span><div><h3>Structured problem-solving</h3><p>Breaking down requirements and communicating technical decisions.</p></div></article>
            </div>
          </div>
          <div className="education-strip"><GraduationCap size={21}/><div><span className="eyebrow">EDUCATION</span><strong>Bachelor of Engineering - Software Engineering</strong><small>Monash University · Current undergraduate (expected end - Dec 2027)</small></div></div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <SectionHeading eyebrow="02 / SELECTED WORK" title="Projects with purpose." intro="A selection of university and technical projects that reflect my interests across software design, architecture and data storytelling." />
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent} ${expanded === index ? 'expanded' : ''}`} key={project.number}>
                <button className="project-summary" onClick={() => setExpanded(expanded === index ? -1 : index)} aria-expanded={expanded === index}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-title-wrap">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  </div>
                  <span className="project-open">{expanded === index ? <X size={18}/> : <ArrowUpRight size={19}/>}</span>
                </button>
                {expanded === index && <div className="project-details">
                  <div className="detail-column"><span className="eyebrow">ROLE / {project.role.toUpperCase()}</span><h4>What I worked on</h4><ul>{project.details.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div className="detail-column detail-note"><span className="eyebrow">REFLECTION</span><h4>What this project taught me</h4><p>{project.learning}</p> {(project.evidence || project.evidenceLinks?.length > 0) && (
                    <div className="evidence-note">
                      <strong>Project evidence</strong>
                      {project.evidence && <p>{project.evidence}</p>}
                      {project.evidenceLinks?.map(link => (
                        <p key={link.url}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label} <ExternalLink size={14} />
                          </a>
                        </p>
                      ))}
                    </div>
                  )}</div>
                </div>}
              </article>
            ))}
          </div>
          <p className="project-footnote"><span className="status-dot" /> Select a project to explore its contribution, technical focus and reflection.</p>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <SectionHeading eyebrow="03 / TOOLKIT" title="A growing engineering toolkit." intro="Tools and practices I have explored through university projects and practical experience." />
          <div className="skills-grid">
            {skills.map(({title,text,icon:Icon}) => <div className="skill-card" key={title}><span className="skill-icon"><Icon size={19}/></span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <p className="skills-note">My toolkit is continually evolving as I take on new projects and deepen my engineering practice.</p>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <SectionHeading eyebrow="04 / EXPERIENCE" title="Learning through collaboration." />
          <div className="experience-list">
            <article className="experience-item"><div className="experience-date">IT INTERNSHIP</div><div><h3>IT Intern <span>· Vivat Health Solutions</span></h3><p>Supported day-to-day technical operations, responded to internal support requests and worked with colleagues across departments to help resolve technical issues. Developed practical troubleshooting and communication skills.</p></div></article>
            <article className="experience-item"><div className="experience-date">RESEARCH PROJECT</div><div><h3>Research Project Team Member <span>· Monash University</span></h3><p>Contributed to research into future medical technology, including robotic prosthetics. Worked with a multi-disciplinary team to gather and synthesise information, discuss ideas and present the project at a public exhibition.</p></div></article>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">05 / GET IN TOUCH</span>
              <h2>Let's build<br/><em>something meaningful.</em></h2>
              <p>I'm interested in graduate software engineering opportunities and internships where I can keep learning, contribute to a team and build technology that makes a difference.</p>
              <a className="button button-primary" href="mailto:layelaheartl@gmail.com">
                Start a conversation <ArrowUpRight size={17}/>
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:layelaheartl@gmail.com?subject=Portfolio%20Enquiry"><span><Mail size={18}/></span><div><small>EMAIL</small><strong>layelaheart@gmail.com</strong></div><ExternalLink size={15}/></a>
              <a href="https://www.linkedin.com/in/layela" target="_blank" rel="noopener noreferrer"><span><Linkedin size={18}/></span><div><small>LINKEDIN</small><strong>linkedin.com/in/layela</strong></div><ExternalLink size={15}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">LM</span><span>LAYELA MOYO<span className="brand-sub">SOFTWARE ENGINEERING</span></span></a>
        <span>Designed with intention · 2026</span>
        <a href="#home" className="back-top">BACK TO TOP </a>
      </footer>
    </div>
    </>
  );
}

export default App;