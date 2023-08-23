// imports
var express = require('express')

var server = express()

var users = ["shadow.no.money", "test"]
var bannis = ["127.0.1.1"]

server.get('/users', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(users)
});

server.get('/bannis', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(bannis)
});

server.listen(8080, function() {
    console.log('serv en écoute')
})