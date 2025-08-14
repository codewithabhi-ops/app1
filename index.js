const express = require('express');
const app = express();

// Use the PORT provided by the environment (important for App Runner)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to App 1</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          text-align: center;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 0.3em;
        }
        p {
          font-size: 1.2em;
          max-width: 600px;
        }
        footer {
          position: absolute;
          bottom: 10px;
          font-size: 0.9em;
          opacity: 0.7;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Hello from App 1!</h1>
      <p>This is Abhishek — a brand new feature has been added! 🎉</p>
      <footer>Powered by AWS App Runner & Node.js</footer>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App 1 listening on port ${PORT}`);
});
