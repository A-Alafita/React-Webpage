const express = require('express'); 
var request = require('request');
const app = express(); 
const port = 4002; 

app.get('/',(req,res) => res.send('Hello World'));
app.get('/getWeatherMexico',(req,res) => {
    request('http://api.weatherstack.com/current?access_key=fb3e5858c6154bfde6b88cbad0a53bf4&query=Mexico',
    function(error,response,body){
        if(!error && response.statusCode == 200){
            res.send(body); //prints the weather of mexico city 
        }
    }
    );
});


app.listen(port, () => console.log(`Example app listeining on port ${port}!`)); 
