import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  amazonLink: {
    type: String,
    required: true,
  },

  registrationDate: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
  fileHash: {
    type: String,
    required: true,
  },
  transactionHash: {
    type: String,
    required: true,
  },
});

const bookModel = mongoose.model('book', bookSchema, 'book');

export { bookModel };
