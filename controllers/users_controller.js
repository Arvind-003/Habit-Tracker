const User=require('../models/user');

module.exports.profile=function(req,res){
    let id=req.query.id;
    // console.log(id);
    User.findById(id,function(err,profileData){
        if(err){
            console.log("error in fetching by id");
            return;
        }
        
    
        return res.render('user_profile',{
        title: "profile",
        habit_profile:profileData
    });
    });
    
}

module.exports.update =function(req,res){
    console.log(req.body);
    console.log(req.query.id);
    
    User.findByIdAndUpdate(req.query.id,{status:req.body.status},function(err,data){
        if(err){
            console.log("errror while updating");
            return;
        }
        return res.redirect('back');
    });

}

