var mongodb = require( 'mongodb' );
var mongo = mongodb.MongoClient;
var path = require( 'path' );
var express = require( 'express' );
var app = express();

// This env variable contains username:password for mLab db
// The env variable has also been added to Heroku config

var mongoUserPsw = process.env.MONGO_USER_PSW;
var url = 'mongodb://' +
  mongoUserPsw +
  '@ds013911.mlab.com:13911/smlr-url';

var routes = require( './routes' );
var data = require( './data' );

mongo.connect( url, function( err, db ) {
  if ( err ) {
    console.log( 'Error: Could not connect to DB' );
  } else {
    console.log( 'Success: Connected to DB' );
    // Magic happens here...
    routes(app, db);
    data(app, db);
  }
  app.set( 'port', ( process.env.PORT || 5000 ));
  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'ejs');
  app.listen( app.get( 'port' ), function() {
    console.log( 'Node app is running on port ', app.get( 'port' ) );
  });
});
