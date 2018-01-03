const express = require('express')
const app = express()

 app.get('/',function(req,res){
   res.send('Hello there!!! Type /yourname after the home URL for a personalized greeting')
 })

app.get('/:name', function(req,res){
    res.send("Hello " + req.params.name)
})

app.listen(3000,function(){
  console.log("server is running")
})

