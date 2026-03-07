import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="#"
          className="footer-link"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abby-carlson-b1b368369"
          className="footer-link"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="mailto:abbycarlson764@gmail.com"
          className="footer-link"
          aria-label="Email"
        >
          <FiMail />
        </a>
      </div>
      <p className="footer-copy">
        &copy; {year} <span>Abby Carlson</span> — built with React &amp; Vite
      </p>
    </footer>
  );
}
