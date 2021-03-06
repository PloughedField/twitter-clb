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
//retern home page
app.get('/', (req, res) => res.render('pages/index'))
//retern users search page
app.get('/users-search', (req, res) => res.render('pages/users-search')) 
//retern tweets search page
app.get('/search-tweets', (req, res) => res.render('pages/search-tweets')) 

//retern sSensitivity analysis report
app.get('/sentiment-analysis-report', (req, res) => res.render('pages/sentiment-analysis-report')) 

//Sends API request users-search
app.get("/users-search-api-v1-twitter", async(req, res) => {
  var keyword =req.query.search
  try { 
    if(keyword == "" || keyword == undefined || keyword == null ){
      res.render('pages/error_users')

    }else {
    var resp = await twit.users_search(req.query.search);
   
      for (let item of resp) {
        item.demo =  `https://twitter.com/${item.screen_name}`
      }
      console.log(resp,"A")
      if (resp.length == 0 || 'errors' in resp){
        res.render('pages/error_users')
      }else{
        res.render('pages/results-users-search', { data: resp })
      }

    }

    
    
  }
  catch(err) {
    console.log(err)
    res.render('pages/error_users')
  }
    
    
    
})
//Sends API request tweets search
app.get("/tweets-search-api-v1-twitter", async(req, res) => {
  var keyword =req.query.search
  try { 
    if(keyword == "" || keyword == undefined || keyword == null ){
      res.render('pages/error_tweets')

    }else {
      var resp = await twit.tweets_search(keyword);
      console.log(resp,"B")
      if ('errors' in resp || resp.meta.result_count == 0){
        res.render('pages/error_tweets')
      }else{
        res.render('pages/results-search-tweets', { data:resp.data})
      }
      
    }

    
    
  }
  catch(err) {
    console.log(err)
    res.render('pages/error_tweets')
  }
  
  
  
})
//Exsspres listen PORT 5050
app.listen(PORT, () => console.log(` http://localhost:${PORT}`))
