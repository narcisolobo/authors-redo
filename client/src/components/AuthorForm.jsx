import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAuthor } from '../services/author-service';

function AuthorForm() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { id: input, value } = e.target;
    setAuthor((author) => ({ ...author, [input]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor(author)
      .then((author) => {
        console.log(author);
        navigate('/authors');
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="card">
      <header>
        <h4>Create Author</h4>
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
        <div className="flex-end">
          <button className="btn">Add Author</button>
        </div>
      </form>
    </article>
  );
}

export default AuthorForm;
