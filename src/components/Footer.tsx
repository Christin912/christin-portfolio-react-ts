cat > src/components/Footer.tsx <<'TSX'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 Christin Anil. Built with passion and code.</p>
        <div className="social-links">
          <a href="mailto:christinanil39@gmail.com" title="Email" aria-label="Email" rel="noopener noreferrer">📧</a>
          <a href="https://github.com/Christin912" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">💻</a>
          <a href="https://www.linkedin.com/in/christin-anil-712ab0251/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">💼</a>
        </div>
        <p style={{marginTop: '0.5rem'}}>📧 christinanil39@gmail.com | 📱 587-643-3789</p>
      </div>
    </footer>
  )
}
TSX
