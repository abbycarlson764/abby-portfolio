import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const GRADIENT_COLORS = [
  'rgba(0, 229, 255, 0.12), rgba(139, 92, 246, 0.12)',
  'rgba(139, 92, 246, 0.12), rgba(0, 229, 255, 0.12)',
  'rgba(0, 229, 255, 0.08), rgba(22, 27, 34, 0)',
  'rgba(139, 92, 246, 0.08), rgba(22, 27, 34, 0)',
];

export default function ProjectCard({ project, index = 0 }) {
  const gradient = GRADIENT_COLORS[index % GRADIENT_COLORS.length];

  return (
    <Link
      to={`/projects/${project.slug}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 229, 255, 0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image / placeholder */}
        <div
          style={{
            height: '275px',
            /*background: `linear-gradient(135deg, ${gradient})`,*/
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <img src={project.image} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
          {/*<span style={{ fontSize: '3rem', opacity: 0.3 }}>◈</span>*/}
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: 'var(--text)',
              marginBottom: '0.6rem',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--muted)',
              lineHeight: '1.65',
              flexGrow: 1,
              marginBottom: '1.2rem',
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.tags.map(tag => (
              <Badge
                key={tag}
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: 'var(--text)',
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--cyan)',
            }}
          >
            View Project <FiArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
