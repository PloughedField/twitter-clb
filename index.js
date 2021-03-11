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

// const urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.render('pages/index'))

app.get('/results-twitter', (req, res) => res.render('pages/results')) 


app.get("/request-twitter", async(req, res) => {
  
    // res.status(200).json({ message: 'ok' });
    // console.log(req)
    var resp = await twit.users_search(req.query.search)
      
    
    res.render('pages/results', { data: resp})

    

})

app.listen(PORT, () => console.log(` http://localhost:${PORT}`))






















// // express()
// //   .use(express.static(path.join(__dirname, 'public')))
// //   .set('views', path.join(__dirname, 'views'))
// //   .set('view engine', 'ejs')
// //   .get('/', (req, res) => res.render('pages/index'))
// //   .get('/results-twitter', (req, res) => res.render('pages/results'))
// //   .get('/request-twitter', (req, res) => twit.users_search(req))
  
// //   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

