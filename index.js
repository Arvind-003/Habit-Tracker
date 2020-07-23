const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes'))


//server running on port 8000
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server `);
        return;
    }
    console.log(`server is running on port : ${port}`);
});