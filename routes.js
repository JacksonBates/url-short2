var routes = function() {

  var express = require( 'express' );
  var app = express();

  function listen() {
    app.set( 'port', ( process.env.PORT || 5000 ));
    app.listen( app.get( 'port' ), function() {
      console.log( 'Node app is running on port ', app.get( 'port' ) );
    });
  }

  function routes() {
    app.get( '/', function( req, res ) {
      console.log( "I'm rooting for you!' ");
      res.end( 'Working' );
    });

    app.get( '/route', function ( req, res ) {
      console.log( '/route' );
      res.send( '/route' );
    })
  }

  return {
    listen: listen,
    routes:routes
  };

};

module.exports = routes();
