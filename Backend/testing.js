const express = require('express');
var request = require('request');
const app = express();
const port = 4003;

// app.get('/',(req,res) => res.send('Hello World'));
// app.get('/getWeatherMexico',(req,res) => {
//     request('http://api.weatherstack.com/current?access_key=fb3e5858c6154bfde6b88cbad0a53bf4&query=Mexico',
//     function(error,response,body){
//         if(!error && response.statusCode == 200){
//             res.send(body); //prints the weather of mexico city 
//         }
//     }
//     );
// });

app.get('/', function (req, res) {
    var sql = require("mssql");

    const sqlConfig = {
        user:'cemexAdmin',
        password: 'equipo1$',
        database: 'DataCemex',
        server: 'cemexserver.database.windows.net',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: true, // for azure
            trustServerCertificate: false // change to true for local dev / self-signed certs
        }
    }


    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from empleado', function (err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

var server = app.listen({ port }, function () {
    console.log('Server is running..');
});

// app.listen(port, () => console.log(`Example app listeining on port ${port}!`)); 
