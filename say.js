/* const f = require('./func'); 
  
console.log(f.add(4, 4)); 
console.log(f.subtract(8, 4));
        

var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
    //[/summer & winter in url]
      */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
                
//var fs = require('fs');

fs.appendFile('demofile.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
       /*
fs.writeFile('demofile.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
        */
        /*
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);    
         
        */
       
/*
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/index',function(req,res)
{
    response={
        first_name : req.query['first_name'] ,
        last_name : req.query['last_name']
    },
    console.log(response);
    msg = JSON.stringify(response)
    fs.writeFile("output.json",msg,'utf8',
    function(err){
        if(err){
            console.log("An error occured while writing JSON object to file");
            return console.log(err);                        
        }
    } )
    res.send("Welcome you all");
})
       */

      /*
const express = reqiure('express')

const say = express();
say.use(exprerss.json());

const PORT = process.env.PORT || 3000 ;

say.listen(PORT , () => {
 console.log("server listening on PORT:", port);
 });

say.get("/status",(request,response) =>{
  const status = {
    "status" : "Running"
  };
  response.send(status);
}).listen(8080);
      */
      /*
var express = require('express');
var server = express();
var routes = require('./route/route');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://127.0.0.1:27017/empolyee",{useNewUrlParser : true, useUnifiedTopology:true),function checkBD(error)

if(error)
{
  console.log("error")
}
else{
  console.log("DB connected !!!")
};

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(8000,function check(error)
{
  if (error)
  {
    console.log("error")
  }
  else{
    console.log("starrteddd")
  }

});
     */