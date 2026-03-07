import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

const SKILLS = [
  {
    category: 'Design',
    items: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Wireframing', 'Accessibility (a11y)'],
  },
  {
    category: 'Front End',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / Sass', 'Storybook'],
  },
  {
    category: 'Tools & Methods',
    items: ['Vite', 'Git', 'Agile / Scrum', 'Usability Testing', 'Design Critiques'],
  },
];

export default function About() {
  return (
    <main className="about-page">
      <Container>
        <Row className="g-5 align-items-start">
          {/* Bio column */}
          <Col lg={7}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
              }}
            >
              Hey, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Abby
              </span>
              .
            </h2>

            <div className="about-photos">
              <div className="about-photo-wrap">
                <img src='/images/about-photo-headshot.jpg' />
              </div>
              <div className="about-photo-wrap">
                <img src='/images/about-photo-swim.jpg' />
              </div>
            </div>

            <p className="about-bio">
              I'm a <strong>UX designer and front end developer</strong> based in the US.
              I'm a recent graduate from the University of Wisconsin-Madison, majoring in Computer Science and Data Science with a certificate in Graphic Design. 
              My coursework led me to a passion in designing simple yet effective solutions for users.
            </p>
            <p className="about-bio">
              My background spans both design and engineering, which means I can take a
              product from research and wireframes all the way to shipped, production-ready
              React components.
            </p>
            <p className="about-bio">
              If you can't find me at my computer, I'm either at swim practice, reading, or just enjoying a coffee and a sandwich at 
              my favorite coffee shop, Madison Sourdough.
            </p>

            <div className="about-availability">
              <span className="availability-dot" />
              Open to new opportunities
            </div>
          </Col>

          {/* Skills column */}
          <Col lg={5}>
            <div className="skills-panel">
              <h4>Skills &amp; Tools</h4>
              {SKILLS.map(group => (
                <div key={group.category} className="skill-category">
                  <p className="skill-category-label">{group.category}</p>
                  <div className="skill-tags">
                    {group.items.map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
