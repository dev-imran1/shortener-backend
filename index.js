
import express from "express";
import {db} from './db.js';
import path from 'path';

const app = express();

app.use(express.json()); //data ki json fromate e dibe frontend k?
app.use(express.urlencoded({extended: true})); //etar kaj ki
app.use(express.static('./public')); 

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));


import urlRoute from './routes/urlRoute.js';
app.use("/url",urlRoute )

db();
app.listen(8000, () => {
  console.log("port connected" )
})


