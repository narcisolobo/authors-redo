import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { deleteOneAuthor } from '../services/author-service';

function AuthorRow({ author, setIsCurrent }) {
  const name = `${author.firstName} ${author.lastName}`;

  const handleDelete = () => {
    deleteOneAuthor(author._id)
      .then((author) => {
        console.log(author);
        setIsCurrent(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>
        <Link to={`/authors/${author._id}`}>{name}</Link>
      </td>
      <td className="grid align-center">
        <Link to={`/authors/${author._id}`}>View</Link>
        <Link to={`/authors/${author._id}/edit`}>Edit</Link>
        <FaTrash
          style={{ color: '#ab2626' }}
          className="delete"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
}

export default AuthorRow;
