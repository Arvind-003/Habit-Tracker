const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Habit-tracker');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('connected to database mongodb:::');
});

module.exports=db;