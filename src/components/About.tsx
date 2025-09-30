cat > src/components/About.tsx <<'TSX'
import React from 'react'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>I'm a Computer Science student at MacEwan University (graduating 2027) with a strong foundation in software development, data structures & algorithms, and applied AI/ML.</p>
          <p>With hands-on experience in multiple programming languages (C/C++, Python, Java, JavaScript, C#, R, PHP) and technologies (Arduino, Docker, Firebase), I thrive at solving complex problems, building reliable systems, and working in collaborative teams.</p>
          <p>I'm eager to apply my skills in software engineering, trading systems, or applied AI and continue building impactful technology that makes a difference.</p>
        </div>
      </div>
    </section>
  )
}
TSX
