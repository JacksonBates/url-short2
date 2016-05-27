var express = require( 'express' );
var router = express.Router();
var data = require( './data' );
var db;
var collection;

// route GET requests
router.get( '/test', function( req, res ) {
  db = req.db;
  collection = db.collection( 'urls' );
  collection.find( {} ).toArray( function( err, docs ) {
    if ( err ) {
      console.log( 'Error: Find operation failed' );
    } else {
      console.log( docs );
      res.end();
    }
  });
});

router.get( '/result', function( req, res ) {
  db = req.db;
  collection = db.collection( 'urls' );
  collection.find( {}, {'_id': false} ).toArray( function( err, docs ) {
    if ( err ) {
      console.log( 'Error: Find operation failed' );
    } else {
      console.log( docs[ docs.length - 1 ] );
      res.send( docs[ docs.length - 1 ] );
    }
  });
});

router.get( '/', function( req, res ) {
  console.log( "I'm rooting for you!");
  res.render( 'index' );
});

router.get( '/:SHORT', function( req, res ) {
  var short = req.params.SHORT;
  var shortHttp = 'http://smlr-url.herokuapp.com/' + short;
    var shortHttps = 'https://smlr-url.herokuapp.com/' + short;
  db = req.db;
  collection = db.collection( 'urls' );
  collection.find( {
    shortUrl: { $in: [ shortHttp, shortHttps ] }
  } ).toArray(function( err, docs ) {
    if ( err ) {
      console.log( 'Error: Could not lookup short url' );
    } else {
      if ( docs && docs.length === 1 ) {
        console.log( docs[0] );
        res.redirect( docs[0].originalUrl );
      }
    }
  });
});

router.get( '/new/:URL*', function( req, res ) {
  var originalUrl = req.originalUrl.slice(5);
  if ( isValidUrl( originalUrl ) ) {
    db = req.db;
    data( db, originalUrl );
    res.redirect( './result' );
  } else {
    res.end( 'Error: Invalid URL' );
  }
});

function isValidUrl(originalUrl) {
  var re = /(http:\/\/|https:\/\/)[a-z0-9\-]+[.]\w+/;
  if ( originalUrl.match( re ) !== null ) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
