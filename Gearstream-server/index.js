const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");

require('dotenv').config()
//middleware
app.use(cors());
app.use(express.json());

//gearstream
//BEgw3N1lc3Y1teP1

//mongodb config using mongoose
mongoose
  .connect(
    'mongodb+srv://gearstream:BEgw3N1lc3Y1teP1@gearstream-cluster.lbdoaum.mongodb.net/gearstream?retryWrites=true&w=majority&appName=gearstream-cluster'
  )
  .then(
    console.log("MongoDB connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));

  //import routes
const __dirname = path.resolve();
  const menuRoutes = require('./api/routes/menuRoutes.js');
  const cartRoutes = require('./api/routes/cartRoutes.js')
  app.use('/menu', menuRoutes)
  app.use('/carts', cartRoutes)

app.use(express.static(path.join(__dirname, '/Gearstream-client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Gearstream-client', 'dist', 'index.html'));
})

app.get("/", (req, res) => {
  res.send("app running");
});

app.listen(6001, () => {
  console.log(`gearstream app listening on port ${port}`);
});
