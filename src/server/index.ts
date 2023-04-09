const mongoose = require("mongoose");


    mongoose.connect("mongodb+srv://roshan96arora:Welcome123@cluster0.j2jlajt.mongodb.net/zomato", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected successfully");
    })
        .catch((err:any) => {
            console.log(`${err} Failed to connect database`);
        });
    

module.exports = mongoose;