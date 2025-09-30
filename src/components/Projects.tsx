cat > src/components/Projects.tsx <<'TSX'
import React from 'react'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Interactive Full-Stack Portfolio Website</h3>
              <a href="https://github.com/Christin912/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View →</a>
            </div>
            <p className="project-period">Sep 2025 - Present</p>
            <ul>
              <li>Architected and deployed a production-grade portfolio leveraging modern HTML5, CSS3, and vanilla JavaScript with performance-optimized rendering strategies</li>
              <li>Implemented advanced CSS techniques featuring GPU-accelerated animations, responsive grid systems, and dynamic theme interpolation for cross-device compatibility</li>
              <li>Engineered custom scroll-tracking algorithms and viewport-based animations to optimize Core Web Vitals (LCP &lt; 2.5s, FID &lt; 100ms), resulting in 95+ Lighthouse performance scores</li>
              <li>Integrated CI/CD pipeline with automated deployment to Netlify/Vercel, achieving sub-second initial load times and 40% reduction in resource overhead</li>
            </ul>
            <div className="project-tags">
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Performance Optimization</span>
              <span className="tag">CI/CD</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>C# .NET Music Player with SQL Integration</h3>
              <a href="https://github.com/Christin912/-C-sharp-SQL-Music-App-With-Ui" target="_blank" rel="noopener noreferrer" className="project-link">View →</a>
            </div>
            <p className="project-period">Sep 2025 - Present</p>
            <ul>
              <li>Engineered a full-stack ASP.NET Core Web API with SQL Server integration, enabling robust CRUD operations for music library management with real-time data synchronization</li>
              <li>Implemented Entity Framework Core with database migrations, validation middleware, and comprehensive error handling to ensure ACID compliance and data integrity</li>
              <li>Designed a layered architecture (Controllers → Services → Repository → Database) with dependency injection and asynchronous programming for scalability and maintainability</li>
              <li>Built responsive UI with real-time updates, featuring audio playback controls, playlist management, and search functionality with optimized query performance</li>
            </ul>
            <div className="project-tags">
              <span className="tag">C#</span>
              <span className="tag">ASP.NET Core</span>
              <span className="tag">SQL Server</span>
              <span className="tag">Entity Framework</span>
              <span className="tag">REST API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Brain Activity to Voice Converter</h3>
              <a href="https://github.com/Christin912/Brain-Activity-to-Voice-Converter" target="_blank" rel="noopener noreferrer" className="project-link">View →</a>
            </div>
            <p className="project-period">Nov 2024</p>
            <ul>
              <li>Led development of a brain-computer interface prototype to translate EEG signals into reliable yes/no vocal responses, improving communication options for non-verbal users</li>
              <li>Designed a complete signal-processing pipeline (data acquisition via Arduino, filtering, artifact removal, and time/frequency feature extraction) to produce a clean, ML-ready dataset</li>
              <li>Architected and trained neural network models in PyTorch, using cross-validation and class-weighting to address imbalanced labels; achieved 70% accuracy on held-out data</li>
              <li>Built visualization and analysis tools with Matplotlib to interpret model behaviour, guide feature engineering, and accelerate iteration; documented the pipeline for reproducibility</li>
            </ul>
            <div className="project-tags">
              <span className="tag">PyTorch</span>
              <span className="tag">Arduino</span>
              <span className="tag">Signal Processing</span>
              <span className="tag">Neural Networks</span>
              <span className="tag">Python</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Tutor Scheduling Mobile App</h3>
              <a href="https://github.com/macewanCS/W25_D2" target="_blank" rel="noopener noreferrer" className="project-link">View →</a>
            </div>
            <p className="project-period">Feb 2025 - Apr 2025</p>
            <ul>
              <li>Authored comprehensive Business Requirements Document and high-level system architecture for a tutor-scheduling mobile application; aligned cross-functional stakeholders and defined MVP roadmap</li>
              <li>Specified user roles (student, tutor, admin), session types, tutor qualifications, weekly availability matrix, and cancellation/rescheduling workflows to reduce manual coordination overhead by 60%</li>
              <li>Defined rule-based matching engine with constraint satisfaction (qualifications, availability, minimum weekly sessions) and conflict-resolution algorithms to minimize schedule clashes</li>
              <li>Designed notification system architecture (in-app + email) for bookings, cancellations, and reminders; recommended offline-first client with Firebase-backed sync for 99.9% reliability</li>
            </ul>
            <div className="project-tags">
              <span className="tag">Android Studio</span>
              <span className="tag">Firebase</span>
              <span className="tag">System Design</span>
              <span className="tag">Agile</span>
              <span className="tag">Mobile Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
TSX
