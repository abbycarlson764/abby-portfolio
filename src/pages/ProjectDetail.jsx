import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';
import { FiArrowLeft, FiGithub, FiExternalLink, FiChevronDown, FiFileText } from 'react-icons/fi';
import projects from '../data/projects';
import '../styles/ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="project-detail">
      <Container>
        {/* Back button */}
        <Link to="/projects" className="back-btn">
          <FiArrowLeft size={15} />
          Back to Projects
        </Link>

        <div className="detail-layout">
          {/* Main content */}
          <div className="detail-content">
            {/* Header */}
            <header className="detail-header">
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-overview">{project.overview}</p>

              <div className="detail-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="detail-tag">{tag}</span>
                ))}
              </div>

              <div className="detail-meta">
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Role</span>
                  <span className="detail-meta-value">{project.role}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Duration</span>
                  <span className="detail-meta-value">{project.duration}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Team</span>
                  <span className="detail-meta-value">{project.team}</span>
                </div>
              </div>
            </header>

            {/* Inspiration */}
            <section className="detail-section">
              <p className="detail-section-title">Inspiration</p>
              <div className="inspiration-layout">
                <p className="detail-body-text">{project.inspiration}</p>
                {project.inspirationImage && (
                  <div className="inspiration-image-wrap">
                    <img src={project.inspirationImage.src} alt="" className="inspiration-image" />
                    {project.inspirationImage.caption && (
                      <p className="inspiration-image-caption">{project.inspirationImage.caption}</p>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Problem */}
            <section className="detail-section">
              <p className="detail-section-title">The Problem</p>
              <div className="problem-callout">
                <p className="problem-text">{project.problem}</p>
              </div>
            </section>

            {/* Process */}
            <section className="detail-section">
              <p className="detail-section-title">Process</p>
              <div className="process-list">
                {project.process.map((step, i) => (
                  <details key={step.phase} className="process-step">
                    <summary className="process-step-header">
                      <span className="process-step-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="process-step-phase">{step.phase}</span>
                      <span className="process-step-summary">{step.summary}</span>
                      <FiChevronDown size={16} className="process-step-chevron" />
                    </summary>
                    <div className="process-step-body">
                      <p>{step.detail}</p>
                      {step.bullets?.length > 0 && (
                        <div>
                          {step.bullets.map((bullet, i) => (
                            <li key={i} >
                              <span aria-hidden="true" />
                              {bullet}
                            </li>
                          ))}
                        </div>
                      )}
                      {step.personas?.length > 0 && (
                        <div>
                          <br></br>
                          <p>{step.personas}</p>
                        </div>
                      )}
                      {step.wireframes?.length > 0 && (
                        <div>
                          <p>{step.wireframes}</p>
                        </div>
                      )}
                      {step.findings?.length > 0 && (
                        <div>
                          {step.findings.map((bullet, i) => (
                            <li key={i} >
                                <span aria-hidden="true" />
                                {bullet}
                            </li>
                          ))}
                        </div>
                      )}
                      {step.images?.length > 0 && (
                        <div className="process-step-image-wrap" style={{ marginTop: '1rem' }}>
                          {step.images.length === 1 ? (
                            <>
                              {step.images[0].src
                                ? <img src={step.images[0].src} alt={step.images[0].alt || ''} className="process-step-image" />
                                : <div className="process-step-image-placeholder" />
                              }
                              {step.images[0].caption && <p className="process-step-image-caption">{step.images[0].caption}</p>}
                            </>
                          ) : (
                            <Carousel interval={null} className="process-step-carousel">
                              {step.images.map((img, j) => (
                                <Carousel.Item key={j}>
                                  {img.src
                                    ? <img src={img.src} alt={img.alt || ''} className="process-step-image" />
                                    : <div className="process-step-image-placeholder" />
                                  }
                                  {img.caption && (
                                    <Carousel.Caption className="process-step-carousel-caption">
                                      <p>{img.caption}</p>
                                    </Carousel.Caption>
                                  )}
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          )}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lessons */}
            <section className="detail-section">
              <p className="detail-section-title">What I Learned</p>
              <ul className="lessons-list">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="lessons-item">
                    <span className="lessons-bullet" aria-hidden="true" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>

            {/* External links */}
            <div className="detail-links">
              {project.casestudy && (
                <a href={project.casestudy} className="detail-link-btn primary" target="_blank" rel="noreferrer">
                  <FiFileText size={15} /> View Full Case Study
                </a>
              )}
              {project.github && (
                <a href={project.github} className="detail-link-btn secondary" target="_blank" rel="noreferrer">
                  <FiGithub size={15} /> View Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="detail-link-btn secondary" target="_blank" rel="noreferrer">
                  <FiExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
