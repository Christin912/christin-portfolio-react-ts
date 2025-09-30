cat > src/components/Nav.tsx <<'TSX'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="logo">CA</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>
    </nav>
  )
}
TSX
