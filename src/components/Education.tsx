cat > src/components/Education.tsx <<'TSX'
import React from 'react'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3>MacEwan University</h3>
              <p style={{color: 'var(--text-muted)', marginTop: '0.5rem'}}>BSE in Computer Science, Minor in Biological Science</p>
              <p style={{color: 'var(--text-muted)', marginTop: '0.3rem'}}>Edmonton, Alberta</p>
            </div>
            <div className="date">Expected May 2027</div>
          </div>
        </div>
      </div>
    </section>
  )
}
TSX
