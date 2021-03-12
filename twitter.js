const request = require('request')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
const fs = require('fs');
var rp = require('request-promise');
var Promise = require('promise');
const { response } = require('express');
const { mainModule } = require('process');

module.exports =
{

  users_search,
  tweets_search

}

const AuthenticationKeys = {
  consumer_key: 'GOG1FOPMnejJGuwBnxKdaxIy9',
  consumer_secret: 'rn1nCBfhbA6ESeMBqmdmU0LcktDG0WdSYMGRFueCIOwiNhMRn1',
  token: '1066915601992560640-oOqHW7BU5piqpdeYJrwZbgRQGLRTRS',
  token_secret: 'tsA7R0cVAkzq94TpCUbgnLRaljSS61YQIPS5cKAdRRf1z'
};

async function users_search(user_name) {
  let response = await sendHttpRequest(user_name);
  console.log('A')
  return response;
}

function sendHttpRequest(user_name) {
  return new Promise((resolve, rej) => {
    request.get('https://api.twitter.com/1.1/users/search.json', {
      oauth: AuthenticationKeys,
      qs: { q: user_name }
    },
      async (err, res, body) => {
        var data = await JSON.parse(body);
        // console.log(data)
        console.log('B')
        resolve(data);
      });
  });
}


async function tweets_search(key_words) {
  let response = await sendHttpRequest2(key_words);
  console.log('A')
  return response;
}

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
