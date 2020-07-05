import express from 'express';
import { bookModel } from '../models/book.js';

const app = express();

app.get('/book', async (_, res) => {
  try {
    const book = await bookModel.find({});
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/book/:id', async (req, res) => {
  try {
    const book = await bookModel.find({_id: req.params.id});
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/book', async (req, res) => {
  try {
    const book = new bookModel(req.body);
    await book.save();

    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/book/:id', async (req, res) => {
  try {
    const book = await bookModel.findOneAndDelete({ _id: req.params.id });
    if (!book) {
      res.status(404).send('Documento não encontrado na coleção');
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/book/:id', async (req, res) => {
  try {
    const book = await bookModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(book);
    
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as bookRouter };
