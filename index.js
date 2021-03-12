const express = require('express')
const path = require('path')
var twit = require("./twitter");
var bodyParser = require("body-parser")
var Promise = require('promise');

const PORT = process.env.PORT || 5050




const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => res.render('pages/index'))

app.get('/users-search', (req, res) => res.render('pages/users-search')) 
app.get('/search-tweets', (req, res) => res.render('pages/search-tweets')) 

app.get("/users-search-api-v1-twitter", async(req, res) => {
  
    var resp = await twit.users_search(req.query.search);
   
      for (let item of resp) {
        item.demo =  `https://twitter.com/${item.screen_name}`
      }
    res.render('pages/results-users-search', { data: resp })
    
    
})

app.get("/tweets-search-api-v1-twitter", async(req, res) => {
  
  var resp = await twit.tweets_search(req.query.search);
  res.render('pages/results-search-tweets', { data:resp.data})
  
  
})

app.listen(PORT, () => console.log(` http://localhost:${PORT}`))






















