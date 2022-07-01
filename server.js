const express = require('express')
const app = express()
app.use(express.static(__dirname + '/dist/QueenBee'))

app.get ('*',(req,res)=>{
  res.sendFile('index.html',{root:'dist/QueenBee/'})
})

app.listen(process.env.PORT || 8080)