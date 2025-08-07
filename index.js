const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from App 1! this is abhishek! new feature added!');
});

app.listen(PORT, () => {
  console.log(`App 1 listening on port ${PORT}`);
});

