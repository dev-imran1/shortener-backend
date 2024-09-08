const express = require('express')
const app = express()
const courseRoute = require('./routes/course.route')



app.use("/course", courseRoute)

app.listen(8000, () => {
  console.log("port connected" )
})


