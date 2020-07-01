const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const receitas = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function (req, res) {
  return res.render('home', { items: receitas })
})
server.get('/about', function (req, res) {
  return res.render('about')
})
server.get('/recipe', function (req, res) {
  return res.render('recipe', { items: receitas })
})

server.get("/receita", function (req, res) {
  const id = req.query.id
  const receita = receitas.find(function(receita){
     return receita.id == id
  })
 
  return res.render('receita', {item: receita})
 

})

server.listen(5000, function () {

  console.log('server is runnig')
})