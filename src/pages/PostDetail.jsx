import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';
import posts from '../data/posts';
import '../styles/PostDetail.css';

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/writing" replace />;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="post-detail">
      <Container>
        <Link to="/writing" className="back-btn">
          <FiArrowLeft size={15} />
          Back to Writing
        </Link>

        <article className="post-article">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-header-date">{formattedDate}</span>
              <div className="post-header-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-header-tag">{tag}</span>
                ))}
              </div>
            </div>

            <h1 className="post-header-title">{post.title}</h1>

            <div className="post-byline">
              <span className="post-byline-label">By</span>
              <span className="post-byline-author">Abby Carlson</span>
            </div>
          </header>

          <div className="post-divider" />

          <div className="post-body">
            {post.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </Container>
    </main>
  );
}
