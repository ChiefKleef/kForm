const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use('/', express.static('dist'));

const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log('server listening on port ', port);
});

