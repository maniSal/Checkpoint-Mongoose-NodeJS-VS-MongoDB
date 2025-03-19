const mongoose = require('mongoose'); // ✅ Fix typo

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {

        });
        console.log("DB Connected!!");
    } catch (error) {
        console.error(" DB Not Connected!", error);
     
    }
};

module.exports = connectDB;
