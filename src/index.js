const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send(`<h1>Welcome of The Office!</h1><a href="/user">Office Family!</a>`);
});

app.get('/user', (_, res) => {
  res.send(`<ul>
  <li>Michael Scott</li>
    <li>Jim Halpert</li>
    <li>Pam Beesly</li>
    <li>Dwight Schrute</li>
    <li>Angela Martin</li>
    <li>Kelly Kapoor</li>
    <li>Ryan Howard</li>
    <li>Kevin Malone</li>
    <li>Andy Bernard</li>
    <li>Meredith Palmer</li>
    <li>Oscar Martinez</li>
    <li>Phyllis Vance</li>
    <li>Creed Bratton</li>
    <li>Stanley Hudson</li>
    <li>Toby Flenderson</li>
  </ul>`);
});

app.listen(4000, () => console.log('Server Started @=>4000'));
