const express=require('express');
const app=express();
const port=8000;
//cookie-parser and express-session required for noto
const cookieParser=require('cookie-parser');
const session=require('express-session');
const flash = require('connect-flash');
const customMiddleWare=require('./config/middleware');

const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose');
app.use(express.urlencoded());

//require node-sass-middleware
const sassMiddleware=require('node-sass-middleware');

//setting for sass
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));

// first i need to tell in which folder my app look out for static file
app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//use for noty which is required
app.use(session({
    name: 'health-tracker',

    //ToDo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));

// use flash-connet to notify the user
app.use(flash());
app.use(customMiddleWare.setFlash);

//use express router
app.use('/',require('./routes'));//by default it will fetch index.js inside routes


//server running on port 8000
app.listen(port,function(err){
    if(err)
    {
        console.log(`error in running the server `);
        return;
    }
    console.log(`server is running on port : ${port}`);
});