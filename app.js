const express = require('express');
const app = express();
const path = require('path')
const ejs = require('ejs')

const PORT = 3789;


app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',(req,res)=>{
  res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('/photo',(req,res)=>{
    res.render('photo')
})

app.get('/add',(req,res)=>{

    res.render('add')
})
app.listen(PORT,()=>{

console.log(`server Listening on port ${PORT}`);

})