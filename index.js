// const multer = require('multer') 
const express = require("express");
// const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv')
const cors = require("cors");

const app = express();

app.use(cors)
// app.use(cors(corsOptions))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Infinity Blog" });
});

require("./Routs/user.routes")(app);
require('./Routs/catageories.routes')(app);
require('./Routs/blogs.routes')(app)
require('./Routs/system.routes')(app)
require('./Routs/description.routs')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//image baki cha badha ma