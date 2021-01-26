const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Welcome of The Office!</h1>`);
});

app.get('/user', (req, res) => {
  res.send({
    data: [
      { id: 1, user: 'Jim' },
      { id: 2, user: 'Pam' },
      { id: 3, user: 'Michael' },
    ],
  });
});

app.listen(4000, () => console.log('Server Started @=>4000'));
