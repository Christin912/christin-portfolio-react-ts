cat > src/components/Hero.tsx <<'TSX'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Christin Anil</h1>
            <h2>Software Developer & AI Enthusiast</h2>
            <p>Computer Science student at MacEwan University building impactful technology at the intersection of software engineering, applied AI/ML, and system architecture.</p>
            
            <div className="contact-info">
              <div className="contact-item">📍 Edmonton, Alberta</div>
              <div className="contact-item">📧 christinanil39@gmail.com</div>
              <div className="contact-item">📱 587-643-3789</div>
            </div>

            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="mailto:christinanil39@gmail.com" className="btn btn-secondary">Contact Me</a>
              <a href="https://github.com/Christin912" className="btn" style={{border: '2px solid rgba(255,255,255,0.08)', color: 'var(--text)'}} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/christin-anil-712ab0251/" className="btn" style={{border: '2px solid rgba(255,255,255,0.08)', color: 'var(--text)'}} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dot dot-red" />
                <div className="window-dot dot-yellow" />
                <div className="window-dot dot-green" />
              </div>
              <div className="code-content">
                <div className="code-line"><span className="keyword">class</span> <span className="function">Developer</span>:</div>
                <div className="code-line">    <span className="keyword">def</span> <span className="function">__init__</span>(self):</div>
                <div className="code-line">        self.name = <span className="string">"Christin Anil"</span></div>
                <div className="code-line">        self.skills = [<span className="string">"Python"</span>, <span className="string">"ML"</span>, <span className="string">"Java"</span>]</div>
                <div className="code-line">        self.passion = <span className="string">"Building the future"</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
TSX
