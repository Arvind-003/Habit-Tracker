const User=require('../models/user');

module.exports.home=function(req,res){

    //fetch the habit list
    User.find({},function(err,habits){
        if(err)
        {
            console.log("error in fetching habit list");
            return;
        }
        return res.render('home',{
            title:'Habit-Tracker',
            habit_list:habits
        });
    });
    
}

//get the added habit data
module.exports.create=function(req,res){
    console.log(req.body);
    let d=new Date();
    let date= d.getDate()+" /"+d.getMonth()+"/"+d.getFullYear();
    console.log(date);
    User.create({
        habit:req.body.habit,
        time:req.body.time,
        status:"none",
        date:date
        // days:{
        //     status:"none",
        //     date:date
        // }
    },function(err,newHabit){
        if(err)
        {
            console.log("error while creating habit");
            return;
        }
        console.log(newHabit);
        return res.redirect('back');

    });
}

//to delete ,delete-habit is the controller
module.exports.delete=function(req,res){
    //get the id from query in the url
    let id=req.query.id;

    //find the contact in the database using id
   User.findByIdAndDelete(id,function(err){
       if(err)
       {
           console.log("error in deleting contact from database");
            return;
        }
        console.log("habit deleted");
        return res.redirect('back');
   });
    
   
}