
'use strict';
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/examdb', { useNewUrlParser: true });

const { gitAll, gitFav, addFav, editFav, deleteFav } = require ('./controllers/Crypto.controller');
app.get('/all', gitAll);
app.get('/fav', gitFav);
app.post('/addfav', addFav);
app.put('/edit/:id', editFav)
app.delete('/delete/:id', deleteFav)
app.get('/', (req, res) => {
    res.send("Hello from Backend");
})


app.listen(8000|| 3001, () => {
    console.log("The backend working now ")
})