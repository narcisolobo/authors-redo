import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getOneAuthor, deleteOneAuthor } from '../services/author-service';

function AuthorDetails() {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    getOneAuthor(authorId)
      .then((author) => setAuthor(author))
      .catch((err) => console.log(err));
  }, [authorId]);

  const handleDelete = () => {
    deleteOneAuthor(author._id)
      .then((author) => {
        console.log(author);
        navigate('/authors');
      })
      .catch((err) => console.log(err));
  };

  return (
    author && (
      <article className="card">
        <header>
          <h5>Author Details</h5>
        </header>
        <p>
          <strong>Author name:</strong> {author.firstName} {author.lastName}
        </p>
        <footer className="flex-end">
          <Link to={`/authors/${authorId}/edit`} role="button" className="btn">
            Edit
          </Link>
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </footer>
      </article>
    )
  );
}

export default AuthorDetails;
