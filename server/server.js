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
  
