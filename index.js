const express = require('express');
const mongoos = require('mongoose');
const keys = require('./config/keys'); // import hidden key config
//just load passport config
require('./services/passport');
require('./models/User');

mongoos.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
//with port to listen
app.listen(PORT);