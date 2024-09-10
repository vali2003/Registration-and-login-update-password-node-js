const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/school'; // Replace with your MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
