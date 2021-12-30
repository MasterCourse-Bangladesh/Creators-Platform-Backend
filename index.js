const express = require ('express');
const app = express();
const PORT = 4040;

app.listen (PORT, ()=>{
    console.log(`Server is listening at PORT ${PORT}`);
})