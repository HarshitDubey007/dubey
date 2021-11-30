const express = require("express");
const app = express();
const env = require('dotenv')
const mongoose = require("mongoose");


// environment variable
env.config();

//router
const usersRouter = require('./router/auth')
const adminRoutes = require('./router/admin/auth')


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.fqkuj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => { console.log('database connected')});

const PORT = process.env.PORT || 3001;
  





app.use(express.json())
// app.use(bodyParser())
app.use('/api', usersRouter)
app.use('/api', adminRoutes)





app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });