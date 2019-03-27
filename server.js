
const express = require('express')
const app = express();
app.use(express['static']('./'));

app.listen(8002, function(){
    console.log(`app listening on port 8002!`)
});



