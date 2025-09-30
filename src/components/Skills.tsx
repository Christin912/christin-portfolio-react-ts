cat > src/components/Skills.tsx <<'TSX'
import React from 'react'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">MATLAB</span>
              <span className="skill-tag">R</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">PHP</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              <span className="skill-tag">ASP.NET Core</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">Entity Framework</span>
              <span className="skill-tag">Matplotlib</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Software & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Android Studio</span>
              <span className="skill-tag">Linux/Unix</span>
              <span className="skill-tag">Figma</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Core Competencies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">Neural Networks</span>
              <span className="skill-tag">Test Development</span>
              <span className="skill-tag">UML</span>
              <span className="skill-tag">Agile</span>
              <span className="skill-tag">Debugging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
TSX
