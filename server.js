var mongodb = require( 'mongodb' );
var mongo = mongodb.MongoClient;
var mongoUserPsw = process.env.MONGO_USER_PSW;
var url = 'mongodb://' +
  mongoUserPsw +
  '@ds025742.mlab.com:25742/fcc-url-shortner-microservice-db';

mongo.connect( url, function( err, db ) {
  if ( err ) {
    console.log( 'Error: Could not connect to DB' );
  } else {
    console.log( 'Success: Connected to DB' );
    // Maging happens here...

    // close the db
    db.close();
    console.log( 'Info: Connection to DB closed' );

  }
});
