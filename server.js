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
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

connectDB()

app.use(express.json());
app.use(cors())
app.use('/app', routerUrls)
app.listen(PORT, () => console.log("server-up and running"))