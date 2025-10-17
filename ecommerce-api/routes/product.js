const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Smartphone', price: 25000 },
  { id: 3, name: 'Tablet', price: 18000 },
  { id: 4, name: 'Smartwatch', price: 8000 },
  { id: 5, name: 'Bluetooth Speaker', price: 3500 },
  { id: 6, name: 'Wireless Headphones', price: 4500 },
  { id: 7, name: 'Gaming Mouse', price: 1200 },
  { id: 8, name: 'Mechanical Keyboard', price: 3000 },
  { id: 9, name: 'External Hard Drive', price: 6000 },
  { id: 10, name: 'Webcam', price: 2200 },
  { id: 11, name: 'Monitor 24-inch', price: 9500 },
  { id: 12, name: 'Router', price: 2800 },
  { id: 13, name: 'Printer', price: 7200 },
  { id: 14, name: 'Power Bank', price: 1500 },
  { id: 15, name: 'USB Flash Drive', price: 600 },
  { id: 16, name: 'Smart TV', price: 32000 },
  { id: 17, name: 'Air Conditioner', price: 42000 },
  { id: 18, name: 'Refrigerator', price: 38000 },
  { id: 19, name: 'Microwave Oven', price: 11000 },
  { id: 20, name: 'Washing Machine', price: 25000 }
];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const newProduct = req.body;

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  newProduct.id = products.length + 1;
  products.push(newProduct);

  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

module.exports = router;
