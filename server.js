const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrls = require('./routes/routes')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
};

connectDB()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.json());
app.use(cors())
app.use('/app', routerUrls)
app.listen(PORT, () => console.log("server-up and running"))