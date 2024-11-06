const mongoose = require("mongoose")
require("dotenv").config();
mongoose.set("strictQuery", false);

const ConnectDb = () => {
    mongoose.connect(process.env.PORT)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log({ message: "Unable to connect !", error: err });
        });
}
module.exports = ConnectDb