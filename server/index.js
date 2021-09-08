const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);
// app.use('/api/files', fileRouter);

const start = async () => {
  try {
    const uri = config.get('dbUrl');
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //db.on('error', console.error.bind(console, 'connection error:'));
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (e) {
    e.message;
  }
};

start();
