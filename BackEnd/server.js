const express = require('express')
const app = express()
const port = 5000

const cors = require('cors');

// Allows us to parse the body of the htp request
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Allows anyone to access the data
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Opens a connection to the database on our locally running instance of mongodb
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://datarep:datarep123@datarep.n2w98sx.mongodb.net/?retryWrites=true&w=majority');
  // using await because database has authentication
}

// Initiate a Scheme. Get a reference and define our object
const movieSchema = new mongoose.Schema({
  title: String,
  cover: String,
  director: String
})

// Compile Schema into a Model
const movieModel = mongoose.model('database', movieSchema);

//Listening for a post request
app.post('/api/movies', (req, res) => {
  console.log(req.body);

  movieModel.create({
    // Creates a request to retreive the details in body
    title: req.body.title,
    cover: req.body.cover,
    director: req.body.director
  })

  res.send('Data Recieved');
})

// Adds a route point that will return json data
app.get('/api/movies', (req, res) => {
  movieModel.find((error, data) => {
    res.json(data);
  })
})

app.get('/api/movie/:id', (req, res) => {
  console.log(req.params.id);
  movieModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

// Listening for a put htp request
app.put('/api/movie/:id', (req, res) => {
  console.log("Update: " + req.params.id);
// finds movie by id in the database and updates it
  movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

app.delete('/api/movie/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  // finds movie by id in the database and deletes it
  movieModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

// Listening for the URL
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})