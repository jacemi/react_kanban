const express = require('express');
const router = express.Router();

const User = require('../db/models/User.js');

router.route('/')
  .get((req, res) => {
    return User
      .fetchAll({ withRelated: ['assignedCards', 'createdCards'] })
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json(err);
      });
  })
  .post((req, res) => {
    let { name } = req.body;
    return new User({ name })
      .save()
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  });

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    return new User()
      .where({ id })
      .fetch({ withRelated: ['assignedCards', 'createdCards'] })
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      })
  })
  .put((req, res) => {
    const { id } = req.params;
    let { name } = req.body;
    return new User()
      .where({ id })
      .save({ name }, { method: 'update' })
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    return new User({ id })
      .destroy()
      .then(user => {
        return res.json(user);
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })


module.exports = router;