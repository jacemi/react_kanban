const express = require('express');
const router = express.Router();

const Card = require('../db/models/card.js');

router.route('/')
  .get((req, res) => {
    return Card
      .fetchAll({ withRelated: ['assignedStatus', 'assignedPriority', 'assignee', 'creator'] })
      .then(card => {
        return res.json(card)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  })
  .post((req, res) => {
    let { title, status_id, priority_id, assignee_id, creator_id } = req.body;
    return new Card({ title, status_id, priority_id, assignee_id, creator_id })
      .save()
      .then(card => {
        return res.json(card)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  });

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    return new Card()
      .where({ id })
      .fetch({ withRelated: ['assignedStatus', 'assignedPriority', 'assignee', 'creator'] })
      .then(card => {
        return res.json(card)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      })
  })
  .put((req, res) => {
    const id = Number(req.params.id);
    let { title, status_id, priority_id, assignee_id, creator_id } = req.body;
    return new Card({ id })
      .save({ title, status_id, priority_id, assignee_id, creator_id }, { method: 'update' })
      .then(card => {
        console.log('put card', card); 
        return res.json(card)
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    return new Card({ id })
      .destroy()
      .then(card => {
        return res.json(card);
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  })


module.exports = router;