const fs = require('fs');

const express = require('express');

const app = express();
const port = 9090;

/*fs.readFile('./data/db.json', (err,result) => {
    if(err){
        throw err;
    }else{
        console.log(JSON.parse(result))
    }
})

fs.appendFile('./data/mytext.txt','This is my new file write\n', (err) => {
    if(err){
        throw err;
    }else{
        console.log('Data written successfully')
    }
})*/

app.get('/',(req,res) => {
    res.send('<h1> Welcome to express server </h1>')
})

app.get('/getMovies',(req,res) => {
    fs.readFile('./data/db.json', (err,result) => {
        if(err){
            throw err;
        }else{
           res.send(JSON.parse(result))
        }
    })
}
)

app.listen(port, (err) => {
    console.log('server is running on port: '+port)
})