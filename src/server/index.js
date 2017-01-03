var express = require('express');

var app = express();

var path = require('path');

app.use('/static', express.static( path.join(__dirname, '..', 'client')) );

app.get('/', (req, res) => {
   res.sendFile( path.join( __dirname, '..', 'views', 'index.html' ) );
});

app.get('/list', (req, res) => {
   res.sendFile( path.join( __dirname, '..', 'views', 'list.html' ) );
});

app.get('/create', (req, res) => {
   res.sendFile( path.join( __dirname, '..', 'views', 'create.html' ) );
});

app.get('/delete', (req, res) => {
   res.sendFile( path.join( __dirname, '..', 'views', 'delete.html' ) );
});

app.listen(3000, (err) => {
   if (!err) {
      console.log('Server started on port 3000');
   }
});
