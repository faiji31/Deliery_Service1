import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/delivery-parcel';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
let db;

async function connectDB() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db('delivery-parcel');
    console.log('✅ Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
}

// Routes
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: '🚀 Delivery Parcel Backend is Running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    service: 'Delivery Parcel API',
    version: '1.0.0',
    database: 'MongoDB Native Driver',
    frontend: 'React + Vite + Tailwind + Daisy UI',
    message: 'Backend API Ready!'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route Not Found', path: req.path });
});

// Start Server
async function startServer() {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════╗
║   🚀 Delivery Parcel Backend Started 🚀        ║
╠════════════════════════════════════════════════╣
║   ✅ Server running on: http://localhost:${PORT} ║
║   ✅ Database: MongoDB (Native Driver)         ║
║   ✅ API Status: /health (or /api/status)      ║
║   ✅ CORS: Enabled                             ║
╚════════════════════════════════════════════════╝
    `);
  });
}

startServer().catch(console.error);
