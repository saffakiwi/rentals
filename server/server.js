const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5003;

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
