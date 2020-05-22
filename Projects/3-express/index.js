const express = require('express');
const { countries, languages } = require('countries-list');

const port = '5000';
const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('<html><body><h1>Hola server</h1></body><html>');
});

app.get('/country', (req, res) => {
  const {
    query: { code },
  } = req;
  if (code) {
    res.status(200).json(countries[code]);
  } else {
    res.status(200).json(countries);
  }
});
app.get('/lenguage/:lang', (req, res) => {
  const {
    params: { lang },
  } = req;
  const langJson = languages[lang];
  if (langJson) {
    res.status(200).json(langJson);
  } else {
    res.status(404).json({ error: 'Cannot found language' });
  }
});

app.get('*', (_req, res) => {
  res.status(404).send('<html><body><h1>Not Found</h1></body><html>');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
