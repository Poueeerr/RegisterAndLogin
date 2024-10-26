const express = require('express');
const path = require('path');

const app = express();
const porta = 3003;

// Serve static files from the "public" directory, including "index.html"
app.use(express.static(path.join(__dirname, 'public')));

app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`);
});
