import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="glitch" data-text="Abby Carlson">
          Abby Carlson
        </h1>

        <p style={{color: '#b7f081ff'}} className="hero-subtitle">
          UX Designer &amp; Front End Developer
        </p>

        <div className="hero-divider" />

        <p className="hero-tagline">
          I work at the intersection of design and code, where creative vision meets technical execution.
        </p>

        <Link to="/projects" className="btn-cta">
          <span>View My Work</span>
          <FiArrowRight style={{ position: 'relative', zIndex: 1 }} />
        </Link>
      </div>


    </main>
  );
}
