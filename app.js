const express = require('express');
const app = express();


//make everything in public folder available
app.use(express.static('public'));

app.get('/home',(req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
})



app.get('/about',(req, res) =>{
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works',(req, res) =>{
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/pictures',(req, res) =>{
    res.sendFile(__dirname + '/views/pictures.html');
})


//start Server 

app.listen(3000, () => console.log('Listening in PORT 3000'));