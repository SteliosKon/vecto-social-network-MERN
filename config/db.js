const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.log(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
