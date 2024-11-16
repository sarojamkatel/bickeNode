const express = require('express')
const app = express()
const port = 3000

app.get('/haha', (req, res) => {
  res.send('surprise motherfucker');
})



app.get('/gula',(req,res)=>{
  res.send('<h1> this gula is printed on screen after the server get get req for /gula endpoint</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
