
import mongoose from "mongoose";

async function db() {
    try {
        await mongoose.connect("mongodb+srv://imrancitbd:XB8POdpGcwJ1pqnG@cluster0.wrtrx.mongodb.net/shortner?retryWrites=true&w=majority&appName=Cluster0");
        console.log("db connected"); // Move this inside the try block
    } catch (error) {
        console.log(error, "db error");
    }
}

export { db };
