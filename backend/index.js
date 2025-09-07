import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/dbConnect.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Handle 404
app.all('*', (req, res) => {
  res.status(404).json({ message: `Can't find ${req.originalUrl} on the server` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
