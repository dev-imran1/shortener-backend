const express = require('express')
const app = express()
const courseRoute = require('./routes/course.route')
const db  = require('./db')

// app.use(express.urlencoded({extended: true})); //etar kaj ki

app.use("/course", courseRoute)
app.use(express.json()); //data ki json fromate e dibe frontend k?
app.use(express.static('./public')); 

app.listen(8000, () => {
  console.log("port connected" )
})


