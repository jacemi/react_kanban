const express = require('express');
const router = express.Router();

const Priority = require('../db/models/priority.js');

router.route('/')
  .get((req, res) => {
    return Priority
      .fetchAll({ withRelated: ['cardsWithPriority'] })
      .then(priority => {
        return res.json(priority)
      })
      .catch(err => {
        return res.json(err);
      });
  })
  .post((req, res) => {
    let { name } = req.body;
    return new Priority({ name })
      .save()
      .then(priority => {
        return res.json(priority)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  });

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    return new Priority()
      .where({ id })
      .fetch({ withRelated: ['cardsWithPriority'] })
      .then(priority => {
        return res.json(priority)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      })
  })
  .put((req, res) => {
    const { id } = req.params;
    let { name } = req.body;
    return new Priority()
      .where({ id })
      .save({ name }, { method: 'update' })
      .then(priority => {
        return res.json(priority)
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    return new Priority({ id })
      .destroy()
      .then(priority => {
        return res.json(priority);
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })


module.exports = router;