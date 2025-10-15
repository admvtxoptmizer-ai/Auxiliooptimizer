const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/config', (req, res) => {
  console.log('Config recebida:', req.body);
  res.json({ success: true, message: 'Config salva' });
});

app.post('/api/aimbot', (req, res) => {
  console.log('Aimbot injetado:', req.body);
  res.json({ success: true, message: 'Injetado com sucesso' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server rodando em http://localhost:${PORT}`);
});
