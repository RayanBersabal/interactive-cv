// backend/index.js
const express = require('express');
const cors = require('cors');
// Untuk sementara kita ambil dari data.js. Nanti ini akan dihapus.
const { educationHistory, skills, projects } = require('./data.js');
const app = express();
app.use(cors());
// Endpoint untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
res.json(educationHistory);
});
// Endpoint untuk mendapatkan data skill
app.get('/api/skills', (req, res) => {
res.json(skills);
});
// Endpoint untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
res.json(projects);
});
// Baris ini penting agar Vercel bisa menjalankan backend Anda
module.exports = app;