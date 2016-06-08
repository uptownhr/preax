require('babel-register')

const app = require('./bootstrap'),
  routes = require('./routes')

app.use('/', routes.Web)


module.exports = app
