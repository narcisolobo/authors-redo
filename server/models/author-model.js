import { model, Schema } from 'mongoose';

const authorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name cannot be blank.'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name cannot be blank.'],
    },
  },
  { timestamps: true }
);

const Author = model('Author', authorSchema);
export default Author;
