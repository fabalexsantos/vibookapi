import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose'
import {bookRouter} from './routes/bookRouter.js'

mongoose
  .connect(
    '  mongodb+srv://vibook:vibook@cluster0.u75qo.gcp.mongodb.net/vibook?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log('Conectado ao servidor Mongo Db'))
  .catch((err) => console.log(err));

const app = express();
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(bookRouter);

app.listen(8000, ()=> console.log("API iniciada na porta 8000"));