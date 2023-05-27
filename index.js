const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Infinity Blog' });
});
app.use('/images', express.static(path.join(__dirname, 'app/Images')));
app.use('/images', express.static(path.join(__dirname, 'images')));

require('./app/routes/user.routes')(app);
require('./app/routes/catageories.routes')(app);
require('./app/routes/blogs.routes')(app);
require('./app/routes/system.routes')(app);
require('./app/routes/description.routs')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
