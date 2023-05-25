import { useEffect, useState } from 'react';
import AuthorRow from './AuthorRow';
import { getAllAuthors } from '../services/author-service';

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    getAllAuthors()
      .then((authors) => {
        setAuthors(authors);
        setIsCurrent(true);
      })
      .catch((err) => console.log(err));
  }, [isCurrent]);

  return (
    isCurrent && (
      <article className="card">
        <header>
          <h3>All Authors</h3>
        </header>
        <table role="grid">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <AuthorRow
                key={author._id}
                author={author}
                setIsCurrent={setIsCurrent}
              />
            ))}
          </tbody>
        </table>
      </article>
    )
  );
}

export default AuthorList;
