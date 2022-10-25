const cardsRouter = require('express').Router();

const {
  getCards, createCard, likeCard, dislikeCard, deleteCard,
} = require('../controllers/cards');

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCard);
cardsRouter.put('/:cardId/likes', likeCard);
cardsRouter.delete('/:cardId', deleteCard);
cardsRouter.delete('/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
