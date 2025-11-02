import React, { useState, useEffect } from 'react';
import './App.css';
import Chatbot from './components/Chatbot';

interface Resume {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    summary: string;
  };
  profile: string;
  experience: {
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }[];
  skills: {
    backend: string[];
    frontend: string[];
    tools: string[];
  };
  certifications: string[];
  awards: string[];
  education: {
    degree: string;
    college: string;
    university: string;
    percentage: string;
    class12: string;
    class10: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  interests: string;
}

function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/resume')
      .then(response => response.json())
      .then(data => {
        setResume(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading resume data...</div>;
  }

  if (!resume) {
    return <div className="error">Error loading resume data. Please check if the backend is running.</div>;
  }

  return (
    <div>
      <header>
        <div className="container nav">
          <div className="brand">
            <span className="dot"></span> {resume.personalInfo.name}
          </div>
          <nav className="actions">
            <a className="btn" href={`mailto:${resume.personalInfo.email}`} aria-label="Email Ravi Jain">
              ✉ Email
            </a>
            <a className="btn" href="resume.pdf" download aria-label="Download Resume PDF">
              ⬇ Download Resume
            </a>
            <a className="btn" href="#contact" aria-label="Jump to contact">
              ☎ Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="avatar" aria-hidden="true">
            Portrait of {resume.personalInfo.name}
          </div>
          <div>
            <h1>{resume.personalInfo.title}</h1>
            <p className="subtitle">
              {resume.personalInfo.location} · <a href={`tel:${resume.personalInfo.phone}`}>{resume.personalInfo.phone}</a> · <a href={`mailto:${resume.personalInfo.email}`}>{resume.personalInfo.email}</a>
            </p>
            <p>{resume.personalInfo.summary}</p>
            <div className="badges">
              {[...resume.skills.backend.slice(0, 3), ...resume.skills.frontend.slice(0, 3), ...resume.skills.tools.slice(0, 3)].map((skill, index) => (
                <span key={index} className="chip">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Profile</h2>
          <p>{resume.profile}</p>
        </section>

        <section>
          <h2>Experience</h2>
          <div className="grid cols-2">
            {resume.experience.map((exp, index) => (
              <article key={index} className="xp">
                <div className="role">{exp.position} — {exp.company}</div>
                <div className="meta">{exp.duration}</div>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Core Skills</h2>
          <div className="grid cols-3">
            <div>
              <div className="small">Back‑End</div>
              <div className="badges">
                {resume.skills.backend.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="small">Front‑End</div>
              <div className="badges">
                {resume.skills.frontend.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="small">DevOps & Data</div>
              <div className="badges">
                {resume.skills.tools.map((skill, index) => (
                  <span key={index} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid cols-2">
          <div className="card">
            <h2>Licenses & Certifications</h2>
            <div className="list">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="item">
                  <span className="dot"></span>
                  <div>{cert}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Honors & Awards</h2>
            <div className="list">
              {resume.awards.map((award, index) => (
                <div key={index} className="item">
                  <span className="dot"></span>
                  <div>{award}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Education</h2>
          <div className="list">
            <div className="item">
              <span className="dot"></span>
              <div><strong>{resume.education.degree}</strong> — {resume.education.college} — {resume.education.university} — {resume.education.percentage}</div>
            </div>
            <div className="item">
              <span className="dot"></span>
              <div><strong>{resume.education.class12}</strong></div>
            </div>
            <div className="item">
              <span className="dot"></span>
              <div><strong>{resume.education.class10}</strong></div>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Interests</h2>
          <p>{resume.interests}</p>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <div className="grid cols-3">
            <div>
              <div className="small">Email</div>
              <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
            </div>
            <div>
              <div className="small">Phone</div>
              <a href={`tel:${resume.contact.phone}`}>{resume.contact.phone}</a>
            </div>
            <div>
              <div className="small">Location</div>
              <span>{resume.contact.location}</span>
            </div>
          </div>
        </section>

        <footer>
          © {new Date().getFullYear()} {resume.personalInfo.name} · Built with React & Spring Boot
          <div className="small">Modern portfolio powered by Java 21, Spring Boot, React & TypeScript</div>
        </footer>
      </main>
      
      <Chatbot resume={resume} />
    </div>
  );
}

export default App;
