const cardsRouter = require('express').Router();

const { getCards, postCard } = require('../controllers/cards');

cardsRouter.get('/', getCards);
cardsRouter.post('/', postCard);

module.exports = cardsRouter;
