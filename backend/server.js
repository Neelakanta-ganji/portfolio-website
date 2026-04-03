const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for leads
const leads = [];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

// Contact Route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields.' });
  }

  const newLead = { id: Date.now(), name, email, message, date: new Date() };
  leads.push(newLead);
  
  console.log('New Lead Received:', newLead);

  res.status(201).json({ success: true, message: 'Message received successfully!' });
});

// View Leads Route - for development/viewing purposes
app.get('/api/leads', (req, res) => {
  res.json({ totalLeads: leads.length, data: leads });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Premium Backend Server running smoothly on port ${PORT}`);
});
