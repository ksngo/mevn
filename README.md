# movie_rating_app

> A Vue.js project

root terminal is 'Book_MEVN/movie_rating_app/'
note 1: 
start mongo server locally. Run mongod in terminal. This is running on 27017 port.

note 2: 
start server.js in root folder. This will allow mongoose to connect to 
mongod server for its database 'movie_rating_app'.
Run nodemon server.js in root terminal.
This is running on 8081 port.

note 3: (Not required in production mode; vue.js is serve statically by using serve-static and running npm run build)
Start app. Run npm run dev in root terminal. This is running on 8080 port.

note 4: (Steps to create the static files inside dist folder; no longer need to run npm run dev. Will host in 8081port only.)

npm install serve-static --save

server.js
add-> const serveStatic = require('serve-static');
add-> app.use(serveStatic(__dirname + "/dist"));

npm run build





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
