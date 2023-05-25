import Author from '../models/author-model.js';

async function createAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllAuthors(req, res) {
  try {
    const allAuthors = await Author.find({});
    res.status(200).json(allAuthors);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneAuthor(req, res) {
  const { id } = req.params;

  try {
    const foundAuthor = await Author.findById(id);
    res.status(200).json(foundAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOneAuthor(req, res) {
  const { id } = req.params;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOneAuthor(req, res) {
  const { id } = req.params;

  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    res.status(200).json(deletedAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
};
