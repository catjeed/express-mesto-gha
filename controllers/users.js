const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка на сервере' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные в методы создания пользователя' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка на сервере' });
      }
    });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Запрашиваемый пользователь не найден' });
      } else {
        res.status(200).send({ data: user });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка на сервере' }));
};

module.exports.updateProfile = () => {};

module.exports.updateAvatar = () => {};
