const mongoose = require('mongoose');

const cryptoSchema= new mongoose.Schema({
    title:String,
    desc:String,
    usd:String,
    img:String
})
const userSchema= new mongoose.Schema({
    email:String,
    fav:[cryptoSchema]
})


const cryptoModel = mongoose.model('crypto', cryptoSchema);
const userModel = mongoose.model('user', userSchema);

// const newuser =()=>{
//     let x= new userModel({
//          email:'v.salvatore7.gs@gmail.com',
//          fav:[{ title:"test",
//              desc:"String",
//              usd:"String",
//              img:"String"}]
//      })
//      x.save()
//  }
//  newuser();
 

module.exports={userModel , cryptoModel};
