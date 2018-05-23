const express = require('express');
const router = express.Router();

const Status = require('../db/models/Status.js');

router.route('/')
  .get((req, res) => {
    return Status
      .fetchAll({ withRelated: ['cards'] })
      .then(status => {
        return res.json(status)
      })
      .catch(err => {
        return res.json(err);
      });
  })
  .post((req, res) => {
    // const { status_account } = req;
    let { name } = req.body;
    return new Status({ name })
      .save()
      .then(status => {
        return res.json(status)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  });

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    return new Status()
      .where({ id })
      .fetch({ withRelated: ['cards'] })
      .then(status => {
        return res.json(status)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      })
  })
  .put((req, res) => {
    const { id } = req.params;
    let { name } = req.body;
    return new Status()
      .where({ id })
      .save({ name }, { method: 'update' })
      .then(status => {
        return res.json(status)
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    return new Status({ id })
      .destroy()
      .then(status => {
        return res.json(status);
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  })


module.exports = router;