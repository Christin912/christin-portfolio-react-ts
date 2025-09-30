cat > src/components/Experience.tsx <<'TSX'
import React from 'react'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>PUMA Group</h3>
              <p className="role">Salesperson</p>
              <p style={{color: 'var(--text-muted)', marginTop: '0.3rem'}}>Edmonton, Alberta • On-site</p>
            </div>
            <div className="date">Jul 2023 - Present</div>
          </div>
          <ul>
            <li>Supervise and coordinate daily floor operations: delegate tasks, coach and onboard new hires, and ensure merchandising and KPI targets are consistently met</li>
            <li>Manage cashier responsibilities and POS operations: process transactions, reconcile tills, handle returns, and resolve escalated customer issues to maintain high satisfaction and accurate financials</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
TSX
