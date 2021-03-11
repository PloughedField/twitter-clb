const request = require('request')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
const fs = require('fs');
// const { response } = require('express');
var rp = require('request-promise');
var Promise = require('promise');
const { response } = require('express');

module.exports =
   {

     users_search,
     tweets_search
     
  }

const AuthenticationKeys = {
    consumer_key:'GOG1FOPMnejJGuwBnxKdaxIy9',
    consumer_secret:'rn1nCBfhbA6ESeMBqmdmU0LcktDG0WdSYMGRFueCIOwiNhMRn1',
    token:'1066915601992560640-oOqHW7BU5piqpdeYJrwZbgRQGLRTRS',
    token_secret:'tsA7R0cVAkzq94TpCUbgnLRaljSS61YQIPS5cKAdRRf1z'
  };

 async function users_search(user_name) {

  
  request.get('https://api.twitter.com/1.1/users/show.json', {
  oauth:AuthenticationKeys,
  qs:{screen_name:user_name}
  }, 
  async(err, res, body) => {
    


  var data = await JSON.parse(body);
  console.log('B') 

  })
 
  console.log('A')
  // return data
}
  
users_search('niralon')

  





















function tweets_search(key_words) {
request.get('https://api.twitter.com/2/tweets/search/recent', {
  oauth:AuthenticationKeys,
  qs:{query:key_words}
}, 
(err, res, body) => {
    var response = JSON.parse(body);
    for (let item of response.data) {
      console.log("text:", item.text);
      fs.writeFileSync('student-2.json', item.text);
    }

  })

}



// async function  tweets(key_words) {
//   const needle = require('needle');

//   // The code below sets the bearer token from your environment variables
//   // To set environment variables on macOS or Linux, run the export command below from the terminal:
//   // export BEARER_TOKEN='YOUR-TOKEN'
//   const token = 'AAAAAAAAAAAAAAAAAAAAAMkLMgEAAAAApbMgiynnzZ4e04Kp295fPE7bGww%3D8fdZrjra0x9qociiT3McVNnvO8C8ojiaxJbxyAar2FvnOiUvgb';

//   const endpointURL = "https://api.twitter.com/2/users/by?usernames="

//   async function getRequest() {

//       // These are the parameters for the API request
//       // specify User names to fetch, and any additional fields that are required
//       // by default, only the User ID, name and user name are returned
//       const params = {
//           usernames: key_words, // Edit usernames to look up
//           "user.fields": "created_at,description", // Edit optional query parameters here
//           "expansions": "pinned_tweet_id"
//       }

//       // this is the HTTP header that adds bearer token authentication
//       const res = await needle('get', endpointURL, params, {
//           headers: {
//               "User-Agent": "v2UserLookupJS",
//               "authorization": `Bearer ${token}`
//           }
//       })

//       if (res.body) {
//           return res.body;
//       } else {
//           throw new Error('Unsuccessful request')
//       }
//   }

//   (async () => {

//       try {
//           // Make request
//           const response = await getRequest();
          
//           console.dir(response, {
//               depth: null,
//               colors: true
           
//           });
         
//       } catch (e) {
//           console.log(e);
//           process.exit(-1);
//       }
//       process.exit();
//   })();
  
// }