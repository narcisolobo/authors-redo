import { Link, NavLink } from 'react-router-dom';

function AuthorHeader() {
  return (
    <nav className="container">
      <ul>
        <li>
          <strong className="brand">Authors</strong>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/authors" end>
            All Authors
          </NavLink>
        </li>
        <li>
          <NavLink to="/authors/new" end>
            Add a New Author
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthorHeader;
