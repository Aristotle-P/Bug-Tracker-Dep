const express = require('express');
const router = express.Router();

const Ticket = require('../models/ticket');

// Get all tickets
router.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find();
  res.send(tickets);
})

// Get individual bug
router.get('/ticket/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findById({ _id: id });
    res.send(ticket);
  } catch (err) { res.send(err) };
})

// Create ticket
router.post('/ticket', async (req, res) => {
  const { title, description, status, developer } = req.body;
  const newTicket = new Ticket({ title, description, status, developer });
  await newTicket.save();
  res.send(newTicket);
})

// Update ticket
router.put('/ticket/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ _id: req.params.id });
    if (!ticket) {
      res.status(404).send('Could not find ticket');
    }

    updates = Object.keys(req.body);

    updates.forEach(data => {
      ticket[data] = req.body[data];
    })
    await ticket.save();
    res.send(ticket)
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;