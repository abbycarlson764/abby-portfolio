import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <main className="projects-page">
      <Container>
        <h2 className="section-heading">
          <span>Selected</span> Work
        </h2>
        <p className="section-subheading">
          A handful of projects spanning UX design and front end development.
        </p>

        <Row xs={1} sm={2} lg={3} className="g-4">
          {projects.map((project, i) => (
            <Col key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} index={i}/>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
