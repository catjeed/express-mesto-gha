/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const userRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '635461920c93930ae97951f9',
  };

  next();
});

app.use('/users', userRouter);
app.use('/cards', cardsRouter);
app.use('/*', (req, res) => res.status(404).send({ message: 'Проверьте адрес запроса' }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
