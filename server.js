const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrls = require('./routes/routes')
const cors = require('cors');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 5000;

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  console.log('Serving React App...');
};

connectDB()

app.enable('trust proxy')
app.use(express.json());
app.use(cors())
app.use('/api', routerUrls)
app.listen(PORT, () => console.log(PORT, "server-up and running"))