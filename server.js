const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Gift Finder API' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/gifts', require('./routes/gifts'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
