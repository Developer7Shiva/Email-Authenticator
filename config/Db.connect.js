const mongoose = require("mongoose")
require("dotenv").config();
mongoose.set("strictQuery", false);

const ConnectDb = () => {
    mongoose.connect("mongodb://Shiva:ShivaShiva@cluster0-shard-00-00.fdoq8.mongodb.net:27017,cluster0-shard-00-01.fdoq8.mongodb.net:27017,cluster0-shard-00-02.fdoq8.mongodb.net:27017/Sampledb?replicaSet=atlas-10a31v-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log({ message: "Unable to connect !", error: err });
        });
}
module.exports = ConnectDb