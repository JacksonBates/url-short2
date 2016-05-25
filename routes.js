module.exports = function( app, db ) {

    // route GET requests
    app.get( '/', function( req, res ) {
      console.log( "I'm rooting for you!");
      res.render( 'index' );
    });

    app.get( '/new/:URL*', function( req, res ) {
      var originalUrl = req.originalUrl.slice(5);
      console.log( originalUrl, isValidUrl(originalUrl));
      res.end();
    });

    function isValidUrl(originalUrl) {
      var re = /(http:\/\/|https:\/\/)[a-z0-9\-]+[.]\w+/;
      if ( originalUrl.match( re ) !== null ) {
        return true;
      } else {
        return false;
      }
    }
};
