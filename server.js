const express = require('express')
const path = require('path');

const app = express()
app.use(express.static('/dist/QueenBee'))


app.get ('*',(req,res)=>{
  res.sendFile('index.html',{root:'dist/QueenBee/'})
})

app.listen(process.env.PORT )