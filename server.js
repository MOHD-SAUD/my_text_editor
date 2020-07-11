const express=require('express');
const server=express();
server.use('/',express.static(__dirname+'/public'));
server.listen(2121,()=>{
    console.log("Server started at http://localhost:2121");
})