const router = require('express').Router()
const render = require('preact-render-to-string')
const { h } = require('preact')
const App = require('../../views/index')

router.get('/',  (req, res) => {
  res.send( render(<App url={req.originalUrl} />) )
})

router.get('/about',  (req, res) => {
  let state = {name: 'wtf'}
  res.send(`
    <html>
    <head>
    </head>
    <body>
      ${render(<App url={req.originalUrl} state={state} />)}
      <script>
        window.__INITIAL_STATE = ${JSON.stringify(state)}
      </script>
      <script src="bundle.js" /></script>
    </body>
    </html>
  `)
})


module.exports = router