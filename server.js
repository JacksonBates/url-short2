var mongodb = require( 'mongodb' );
var mongo = mongodb.MongoClient;

// This env variable contains username:password for mLab db
// The env variable has also been added to Heroku config

var mongoUserPsw = process.env.MONGO_USER_PSW;
var url = 'mongodb://' +
  mongoUserPsw +
  '@ds025742.mlab.com:25742/fcc-url-shortner-microservice-db';

var routes = require( './routes' );

mongo.connect( url, function( err, db ) {
  if ( err ) {
    console.log( 'Error: Could not connect to DB' );
  } else {
    console.log( 'Success: Connected to DB' );
    // Magic happens here...
    routes.routes();
    // call a routing function from module!

    // close the db
    // db.close();
    // console.log( 'Info: Connection to DB closed' );

  }
});
