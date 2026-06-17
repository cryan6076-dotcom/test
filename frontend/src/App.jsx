import { useState, useEffect } from 'react';

function App() {
  const [utang, setUtang] = useState([]);

  // This tells React to fetch data from your EC2 server as soon as the page loads
  useEffect(() => {
    fetch('http://YOUR_AWS_PUBLIC_IP:5000/api/pautang')
      .then(res => res.json())
      .then(data => setUtang(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TindahanAI Live Dashboard</h1>
      <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Backend Connection Status:</h2>
        <p>If you see a number below, your AWS frontend successfully talked to your AWS backend!</p>
        <h3>Total Utang Records: {utang.length}</h3>
      </div>
    </div>
  );
}

export default App;