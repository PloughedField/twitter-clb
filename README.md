# Twitter CLB 
    A simple web app that integrates
    Server and client development, in the popular development language
    NodeJS

    Server Side: NodeJs
    Client side: EJS

    The app works as an insights interface from Twitter.
    The app uses the Twitter API v1



API's

|Method|Type|Description|Method|url - ex|
|---|---|---|---|---|
|/tweets-search-api-v1-twitter|string|input keyword return all tweets containing keyword|GET|https://api.twitter.com/1.1/search/tweets.json?q=covid-19
|/users-search-api-v1-twitter|string|input UserName or UserId return all users or  user specific|GET|https://api.twitter.com/1.1/users/search.json?q=niralon  



## Running Locally
Step one: Apply and receive approval for a developer account Twitter.

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/PloughedField/twitter-clb.git 
$ cd twitter-clb
$ npm install
$ npm start
$ or
$ node ./index.js
```

Your app should now be running on [localhost:5050](http://localhost:5050/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Twitter API:

- [Getting started Twitter API](https://developer.twitter.com/en/docs/twitter-api/getting-started/guide)
- [twitter-api/v1](https://developer.twitter.com/en/docs/twitter-api/v1)
- [twitter-api/v2](https://developer.twitter.com/en/docs/twitter-api/early-access)


