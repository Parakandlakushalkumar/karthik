const os = require('os');
const http = require('http');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API Server!');
})
const productRoutes = require('./routes/product');
app.use('/products', productRoutes);

const printSystemInfo = () => {
  console.log('--- System Info ---');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
  console.log('-------------------\n');
};

const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  printSystemInfo();
});
