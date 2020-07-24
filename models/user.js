//schema
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    habit:{
        type:String,
        required:true,
        unique:true
    },
    time: {
        type:String,
        required:true
    },
    status:{
        type:String
    },
    date:{
        type:String
    }
    // days:{
    //     type:Array
    // }
    

},{
    timestamps:true
});

const User= mongoose.model('User',userSchema);
module.exports=User;