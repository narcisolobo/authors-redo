import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneAuthor, updateOneAuthor } from '../services/author-service';

function AuthorEdit() {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    getOneAuthor(authorId)
      .then((author) => setAuthor(author))
      .catch((err) => console.log(err));
  }, [authorId]);

  const handleChange = (e) => {
    const { id: input, value } = e.currentTarget;
    setAuthor((author) => ({ ...author, [input]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOneAuthor(author)
      .then((author) => {
        console.log(author);
        navigate('/authors');
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="card">
      <header>
        <h4>Edit Author</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          Author First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={author.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Author Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={author.lastName}
            onChange={handleChange}
          />
        </label>
        <button>Edit Author</button>
      </form>
    </article>
  );
}

export default AuthorEdit;
