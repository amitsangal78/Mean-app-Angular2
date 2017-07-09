const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('could not able to connect to database');
  }else{
    console.log('Connected to database: ' + config.db);
  }
});

// parse application/x-www-form-urlencoded 
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication );

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});