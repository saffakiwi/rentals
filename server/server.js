<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2141f5af748b9834b9721f4bb2386bfa17ad23ac
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 4002


//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//connect to mongodb
const uri = `mongodb+srv://Jacques15:Stellenbosch15@cluster0.ggpld.mongodb.net/Test_Database?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(console.log("Connected to database"))
  .catch(error => {
    throw error
  })

// Ruan server side//
//data schema
const rentalsSchema = {
  name: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  latitude: Number,
  longitude: Number,
  suburb: String,
}

//data model
const Rentals = mongoose.model("Rentals", rentalsSchema);

//read route
app.get('/rentals', (req, res) => {
  Rentals.find()
  .then((rental) => res.json(rental))
  .catch((err) => res.status(400).json('Error: ' + err))
});

//create route
app.post('/rentals', (req, res) => {
  const newRental = new Rental({
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    suburb: req.body.suburb,
  })
  newRental.save()
  .then(contact => console.log(contact))
  .catch((err) => res.status(400).json("Error " + err))
})



//Jacques server side//

const amenitiesSchema = {
    name: String,
    latitude: Number,
    longitude: Number,
    suburb: String,
  }
  
  //data model
  const Amenities = mongoose.model("Amenities", amenitiesSchema);
  
  //read route
  app.get('/amenities', (req, res) => {
    Amenities.find()
    .then((amenities) => res.json(amenities))
    .catch((err) => res.status(400).json('Error: ' + err))
  });
  
  //create route
  app.post('/amenities', (req, res) => {
    const newAmenity = new Amenity({
      _id: req.body._id,
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      suburb: req.body.suburb,
    })
    newAmenity.save()
    .then(contact => console.log(contact))
    .catch((err) => res.status(400).json("Error " + err))
  })

app.listen(port, function() {
  console.log("server running on port 4002")
})

<<<<<<< HEAD
=======
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const port = 5003;

//config
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//connect to mongodb
mongoose.connect('mongodb+srv://Jacques15:Stellenbosch15@cluster0.ggpld.mongodb.net/Test_Database?retryWrites=true&w=majority')
.then(() => console.log("DBconnected "))
.catch(err => console.error(err));

//data schema
const itemsSchema = {
    Name: String,
    Price: String,
    Bedrooms: String,
    Bathrooms:String,
    Latitude:String,
    Longitude:String,
}
//data model
const Item = mongoose.model('Item', itemsSchema, 'Rentals');
info = Item.find({});
console.log(info);

app.listen(port, function () {
    console.log("Express is running");
  });
  
>>>>>>> 999c7a70c5cb79c41603b7e2679ffbfb3f2a7927
=======
>>>>>>> 2141f5af748b9834b9721f4bb2386bfa17ad23ac
