const express = require('express');
const app = express();
const port = 3000;

// Menggunakan template engine pug
app.set('view engine', 'pug');
app.set('views', './views');

// Menggunakan middleware untuk memproses body dari request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Menampilkan data JSON
app.get('/data', (req, res) => {
  const data = {
    name: 'Rizqi',
    age: 28,
    email: 'rifai.rizqi3@gmail.com'
  };
  res.json(data);
});

// Menampilkan halaman HTML biasa
app.get('/page', (req, res) => {
  res.send('<h1>Ini adalah halaman HTML</h1>');
});

// Menampilkan halaman dengan template engine pug
app.get('/template', (req, res) => {
  const data = {
    title: 'Halaman Template',
    message: 'Ini adalah halaman menggunakan template engine pug'
  };
  res.render('template', data);
});

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
