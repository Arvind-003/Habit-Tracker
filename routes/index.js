// indexedDB.js in routes is entry point to all my routes
const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log('router loaded');

//accessing home controller action
router.get('/',homeController.home);

// i want this router to available in index.js main ,so i will export it and we will app to use it in main index.js
module.exports=router;