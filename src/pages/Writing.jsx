import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import posts from '../data/posts';
import '../styles/Writing.css';

export default function Writing() {
  return (
    <main className="writing-page">
      <Container>
        <h2 className="section-heading">
          <span>Writing</span>
        </h2>
        <p className="section-subheading">
          Thoughts on design, development, and everything in between.
        </p>

        {posts.length === 0 ? (
          <p className="writing-empty">Posts coming soon.</p>
        ) : (
          <Row xs={1} sm={2} lg={3} className="g-4">
            {posts.map(post => (
              <Col key={post.id}>
                <Link to={`/writing/${post.slug}`} className="post-card">
                  <div className="post-card-header">
                    {post.image && <img src={post.image} alt="" className="post-card-image" />}
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-meta">
                      <span className="post-date">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <div className="post-tags">
                        {post.tags.map(tag => (
                          <span key={tag} className="post-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-summary">{post.summary}</p>
                    <span className="post-cta">
                      Read more <FiArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
}
