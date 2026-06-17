import React, { useState, useEffect } from 'react';

function App() {
  const [inventory, setInventory] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    // This fetches data from your backend running on port 5000
    fetch('http://localhost:5000/api/inventory')
      .then(res => res.json())
      .then(data => setInventory(data))
      .catch(err => console.error("Error fetching inventory:", err));

    fetch('http://localhost:5000/api/analytics')
      .then(res => res.json())
      .then(data => setAnalytics(data))
      .catch(err => console.error("Error fetching analytics:", err));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <h1>🏪 tindahanAI Dashboard</h1>
        <p style={{ color: '#666' }}>Smart Analytics for Filipino MSMEs</p>
      </header>
      
      <section style={{ marginTop: '20px' }}>
        <h2>Current Inventory</h2>
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock Left</th>
              <th>Retail Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td><strong>{item.name}</strong></td>
                <td>{item.category}</td>
                <td>{item.stock} pcs</td>
                <td>₱{item.price}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '30px', backgroundColor: '#eef9f2', padding: '15px', borderRadius: '8px' }}>
        <h2>📈 Profitability Analytics</h2>
        <ul>
          {analytics.map((item, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <strong>{item.name}</strong> yields 
              <span style={{ color: 'green' }}> ₱{item.profitPerUnit}.00 profit</span> per unit. 
              (Max potential return: ₱{item.potentialTotalProfit}.00)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;