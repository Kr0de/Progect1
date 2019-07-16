const port = 3000,
      fs = require('fs'),
      express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),// нужен для работы с формами
      urlencodedParser = bodyParser.urlencoded({ extended: false }),//промежуточное ПО для post запросов
      server = require("http").createServer(app),
      io = require("socket.io").listen(server);

      app.post('/server.js', urlencodedParser, function(req,res){
        console.log(req.body);
        // var database = JSON.stringify(req.body);
        // console.log(database);
        // fs.writeFile('database.json', database, function(){});
        // if(req.body === true){
        //   res.send('Success');
        // }
        res.render('index.ejs');
        if(req.body){
          console.log('Success');
        }
      })

      app.set('view engine', 'ejs');
      app.use('/public', express.static("public"));

      // app.use(function (req, res, next) {
      //   res.header("Access-Control-Allow-Origin", '*');
      //   res.header('Access-Control-Allow-Credentials', '*');
      //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      //   next();
      // });

      app.get('/', function(req,res){
        res.render('index.ejs');
      })
      app.get('/index', function(req,res){
        res.render('index.ejs');
      })
      app.get('/about', function(req,res){
        res.render('about.ejs');
      })
      app.get('/contact', function(req,res){
        res.render('contact.ejs');
      })
      app.get('/shop', function(req,res){
        res.render('shop.ejs');
      })
      app.get('/:id', function(req,res){
        res.render('error.ejs');
      })

  server.listen(3000);


  users = [];
  connections = [];

  io.sockets.on('connection', function(socket){
    console.log("SuccessOn");
    connections.push(socket);

    socket.on('disconnect', function(data){
      connections.splice(connections.indexOf(socket), 1);
      console.log('SuccessOff')
    });
    socket.on('send mess', function(data){
      io.sockets.emit('add mess', {msg: data});
    });
  });