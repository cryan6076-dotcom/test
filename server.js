const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock Database for Sari-Sari Store Items
let inventory = [
  { id: 1, name: 'Kopiko Black 3-in-1', category: 'Beverage', stock: 45, price: 12, cost: 9 },
  { id: 2, name: 'Lucky Me Pancit Canton (Chili Mansi)', category: 'Noodles', stock: 60, price: 16, cost: 12 },
  { id: 3, name: 'Chippy Large', category: 'Snacks', stock: 12, price: 24, cost: 19 }
];

// 1. Inventory Endpoint
app.get('/api/inventory', (req, res) => {
  res.json(inventory);
});

// 2. Sales Analytics Endpoint
app.get('/api/analytics', (req, res) => {
  const analytics = inventory.map(item => ({
    name: item.name,
    profitPerUnit: item.price - item.cost,
    potentialTotalProfit: (item.price - item.cost) * item.stock
  }));
  res.json(analytics);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`tindahanAI backend spinning up on port ${PORT}`));