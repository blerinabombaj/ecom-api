const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 }
  ]);
});

router.post('/orders', (req, res) => {
  res.json({ orderId: 123, status: 'created' });
});

module.exports = router;
