const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//port
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'))
app.use(bodyParser.json())


// DataBase Connect
mongoose.connect('mongodb+srv://faheem:123@cluster0-ip993.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>console.log('db connect'))
.catch(err => console.log('this is err',err))







function file(filename){
    let globalFile = path.join(__dirname,'../public',filename)
    return globalFile;
}


//Route
app.get('/blog',(req,res)=>{
    res.sendFile(file('blog.html'))
})


app.post('/blogpost',(req,res)=>{
    console.log(req.body)
})

app.get('*',(req,res)=>{
    
    res.sendFile(file('index.html'))
})
app.listen(PORT,()=>{
    console.log('server listening PORT'+ PORT)
})