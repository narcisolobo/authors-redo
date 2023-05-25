import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorHeader from './components/AuthorHeader';
import AuthorDetails from './components/AuthorDetails';
import AuthorEdit from './components/AuthorEdit';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <>
      <AuthorHeader />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/authors" />} />
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/authors/new" element={<AuthorForm />} />
          <Route path="/authors/:authorId" element={<AuthorDetails />} />
          <Route path="/authors/:authorId/edit" element={<AuthorEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
