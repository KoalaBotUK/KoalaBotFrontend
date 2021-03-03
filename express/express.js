const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World! <br> Docs can be found at <a href="https://expressjs.com/en/4x/api.html">Docs</a>')
  })
  
  app.listen(port, () => {
    console.log(`Koala Backend app listening at http://localhost:${port}`)
  })