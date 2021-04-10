const { text } = require('body-parser');
var mongoose = require('mongoose');
const userLoginSchema = mongoose.Schema({
   email:{
     type:String,
     require:true
   },
   password:{
     type:String,
     require:true
   },
   signUpAs : {
       type : String,
       require: true
   },
   nameOfOrganisation : {
    type : String,
    require: true   
   },
    name : {
        type :String,
        require : true
    },
    phone :  {
        type:Number,
        require:true
      },
    pincode : {
        type:Number,
        require:true
      }
});

module.exports = User = mongoose.model('userLoginSchema',userLoginSchema);