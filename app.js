const express = require('express');
const app = express();
const path = require('path')


const PORT = 3789;


app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./temp/about.html'))
})

app.listen(PORT,()=>{

console.log(`server Listening on port ${PORT}`);

})