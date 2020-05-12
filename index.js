// installed on node_modules folder
const colors = require('colors');
const express = require('express');

// initializing the app
const app = express();

// the main route of our app
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// bootstraping the app
app.listen(3000, () => {
  console.log('Express app started on port 3000'.random);
});