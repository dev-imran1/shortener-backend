const { mongoose, Schema } = require("mongoose");


const urlSchema = new mongoose.Schema({
    mainUrl: {
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
    },
    count: {
        type: Number,
        max: 100,
    },
    time: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});


const urlModel = mongoose.model("UrlModel", urlSchema);
module.exports = urlModel;
