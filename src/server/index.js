var express = require('express');

var app = express();

app.listen(3000, (err) => {
   if (!err) {
      console.log('Server started on port 3000');
   }
});

var path = require('path');
app.use('/static', path.join(__dirname, '..', 'client'));