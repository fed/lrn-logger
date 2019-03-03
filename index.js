const express = require('express');
const cors = require('cors');
const app = express();
const frequency = new Map();
const port = 6789;

app.use(cors());
app.get('/log', (req, res) => res.status(200).send([...frequency]));
app.get('/', (req, res) => {
  const key = req.query.values;
  const nextCount = (frequency.get(key) || 0) + 1;

  frequency.set(key, nextCount);

  res.sendStatus(200);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
