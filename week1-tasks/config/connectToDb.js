const mongoose = require('mongoose');

async function connectToDb(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Your Database is Connected");
    } catch (err) {
        console.log("Not Connected", err);
    }
}

module.exports = connectToDb;