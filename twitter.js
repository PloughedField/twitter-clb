const request = require('request')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
const fs = require('fs');
var rp = require('request-promise');
var Promise = require('promise');
const { response } = require('express');
const { mainModule } = require('process');
// Sharing the functions with other pages
module.exports =
{

  users_search,
  tweets_search

}
// Twitter Verification Keys
const AuthenticationKeys = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
};
// A function that searches for Twitter users (1)
async function users_search(user_name) {
  let response = await sendHttpRequest(user_name);
  console.log('A')
  return response;
}
// A function that searches for Twitter users (1)
function sendHttpRequest(user_name) {
  return new Promise((resolve, rej) => {
    request.get('https://api.twitter.com/1.1/users/search.json', {
      oauth: AuthenticationKeys,
      qs: { q: user_name }
    },
      async (err, res, body) => {
        var data = await JSON.parse(body);
        console.log('B')
        
        resolve(data);
      });
  });
}




// A function that searches for tweets on Twitter (2)
async function tweets_search(key_words) {
  let response = await sendHttpRequest2(key_words);
  console.log('A')
  return response;
}

// A function that searches for tweets on Twitter (2)
function sendHttpRequest2(key_words) {
  return new Promise((resolve, rej) => {
    request.get('https://api.twitter.com/2/tweets/search/recent', {
      oauth: AuthenticationKeys,
      qs: { query: key_words }
    },
      async (err, res, body) => {
        var data = await JSON.parse(body);
        console.log('B')
        resolve(data);
      });
  });
}


