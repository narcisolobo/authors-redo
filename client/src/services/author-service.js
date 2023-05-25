import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

async function createAuthor(author) {
  try {
    const response = await http.post('/authors', author);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getAllAuthors() {
  try {
    const response = await http.get('/authors');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getOneAuthor(authorId) {
  try {
    const response = await http.get(`/authors/${authorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function updateOneAuthor(author) {
  try {
    const response = await http.patch(`/authors/${author._id}`, author);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function deleteOneAuthor(authorId) {
  try {
    const response = await http.delete(`/authors/${authorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
};
