// indexedDB.js in routes is entry point to all my routes
const express=require('express');

const router=express.Router();

console.log('router loaded');




// i want this router to available in index.js main ,so i will export it and we will app to use it in main index.js
module.exports=router;