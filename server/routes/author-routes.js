import { Router } from 'express';
import {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
} from '../controllers/author-controller.js';

const router = Router();

// prettier-ignore
router
  .route('/')
  .post(createAuthor)
  .get(getAllAuthors);

// prettier-ignore
router
  .route('/:id')
  .get(getOneAuthor)
  .put(updateOneAuthor)
  .patch(updateOneAuthor)
  .delete(deleteOneAuthor);

export default router;
