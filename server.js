let express = require('express'),
  next = require('next'),
  dev = process.env.NODE_ENV !== 'production',
  app = next({dev}),
  handle = app.getRequestHandler();
global.app = app;

const user = require('./routes/user')

app.prepare()
  .then(() => {
    const server = express();
    server.get("/info/detail/:id", (req, res) => {
      return app.render(req, res, "/info/detail", { id: req.params.id });
    });
    server.use('/user', user)
    server.get('*', (req, res) => {
      return handle(req, res);
    })
    
    server.listen(3000, (err) => {
      if(err) {
        console.log(err);
        return
      }
      console.log('server is run: 127.0.0.1:3000')
    })
  })
