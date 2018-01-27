const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./constants.js');
const { calcWater } = require('./routes.js');
const _ = require('underscore');
const path = require('path');

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  
});
app.get('/calcWater', calcWater);

app.listen(3000, () => {
	console.log(`listening on port: ${port}`);
})