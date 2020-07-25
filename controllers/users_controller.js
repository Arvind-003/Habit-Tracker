const User=require('../models/user');

//navigating to profile page
module.exports.profile=function(req,res){
    let id=req.query.id;
    // console.log(id);
    //getting all details of individual habits
    User.findById(id,function(err,profileData){
        if(err){
            console.log("error in fetching by id");
            return;
        }
        
        let last_7_days=[];
        let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuurday"];
        for(let i=0;i<7;i++){
            
            let d=new Date();
            let d1=new Date(d.getTime() - (i * 24 * 60 * 60 * 1000));
            let date=weekday[d1.getDay()]+"  ,"+d1.getDate()+"/"+d1.getMonth()+"/"+d1.getFullYear();
            // let date= d.getDate()+" /"+d.getMonth()+"/"+d.getFullYear()+" , "+weekday[d.getDay()];

            let last_status= profileData.days.find(x=> x.date == date);
        
          if(last_status)
            {
              last_7_days.push({date:date,status:last_status.status});
                
            }
          else{
              last_7_days.push({date:date,status:"none"});
            
            }
        }
        return res.render('user_profile',{
        title: "profile",
        habit_profile:profileData,
        last_7_days_list:last_7_days
    });
    });
    
}

//updating the habit status on specific day
module.exports.update =function(req,res){
    console.log(req.body);
    console.log(req.query.id);
    let date = req.query.date;
    console.log(date);
    
    User.findById(req.query.id,function(err,data){
        if(err){
            console.log("errror while updating");
            return;
        }
        let findDay= data.days.find(x=> x.date == date);
        //if that day status present the update that else add it to database
        if(findDay)
        {
         data.days.remove(findDay);
         data.days.push({date:date,status:req.body.status});
         data.save();
        }
        else{
            data.days.push({date:date,status:req.body.status});
            data.save();
        }

        console.log(data);
        return res.redirect('back');
    });

}

