const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    email:{type:String},
    fav:[
        {
            title:{type:String},
            desc:{type:String},
            usd:{type:String},
            img:{type:String}
        }
    ]
})



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
 

module.exports={userModel};
