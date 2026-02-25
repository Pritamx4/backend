const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://Pritamx4:Kalu%40409@backend.2zidbz1.mongodb.net/Pritamx4");
    console.log("Connected to DB")

};


module.exports = connectDB;
