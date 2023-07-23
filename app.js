const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();


app.use(express.static('public'));


app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views/home.html')));

app.get('/registro', (req,res)=> res.sendFile(path.join(__dirname,'views/partials/register.html')));

app.get ('/login', (req,res) => res.sendFile(path.join(__dirname,'views/partials/login.html')));


app.get ('/*', (req,res) => res.sendFile(path.join(__dirname, 'views','404notFound.html')));







app.listen(PORT,()=>console.log(`Server running in http://localhost:${PORT}`));