const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send ("<H1>MasterCourse Creators' Platform</H1>");
})

module.exports = app;