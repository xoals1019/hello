// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// API 엔드포인트
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
                  