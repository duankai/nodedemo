const express = require('express')
const path = require('path')

const app = express()

const port = 3000


app.get('/', function(req, res)
{
  res.sendFile(path.join(__dirname, './client/index.html'))
})

app.use('/static/', express.static(path.join(__dirname, './dist')))

app.listen(port, function(err)
{
  if (err)
  {
    throw new Error(err)
  }
  console.log("Server is listening on:" + port)
})
