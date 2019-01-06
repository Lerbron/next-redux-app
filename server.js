let express = require('express'),
  next = require('next'),
  dev = process.env.NODE_ENV !== 'production',
  app = next({dev}),
  handle = app.getRequestHandler();
  
app.prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => {
      return handle(req, res);
    }).listen(3000, (err) => {
      if(err) {
        console.log(err);
        return
      }

      console.log('server is run: 127.0.0.1:3000')
    })
  })
