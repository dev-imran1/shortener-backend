
const mongooes = require('mongoose');

async function db(){

    try {
        const result = await mongooes.connect("mongodb+srv://imrancitbd:XB8POdpGcwJ1pqnG@cluster0.wrtrx.mongodb.net/shortner?retryWrites=true&w=majority&appName=Cluster0");
        
    } catch (error) {
        console.log(error)
    }
    

}
console.log("db connected")


module.exports = db